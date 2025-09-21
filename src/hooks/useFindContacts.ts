import { useEffect, useState } from 'react';
import { ContactDto } from 'src/types/dto/ContactDto';
import { FilterFormValues } from 'src/components/FilterForm';
import { State } from 'src/types/common';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const useFindContacts = (
  contactsList: ContactDto[],
  groupsList: GroupContactsDto[],
) => {
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  useEffect(() => {
    setContacts(contactsList);
  }, [contactsList]);
  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let findContacts: ContactDto[] = contactsList;

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      findContacts = findContacts.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1,
      );
    }

    if (fv.groupId) {
      const groupContacts = groupsList.find(({ id }) => id === fv.groupId);

      if (groupContacts) {
        findContacts = findContacts.filter(({ id }) =>
          groupContacts.contactIds.includes(id),
        );
      }
    }

    setContacts(findContacts);
  };

  return { onSubmit, contacts };
};
