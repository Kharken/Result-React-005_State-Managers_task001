import contacts from 'src/__data__/contacts.json';
import { ContactDto } from 'src/types/dto/ContactDto';

const contactsReducer = (state: ContactDto[] = contacts) => {
  return state;
};

export { contactsReducer };
