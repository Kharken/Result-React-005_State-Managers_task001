import { GET_ALL_CONTACTS, GET_CONTACT } from 'src/store/actions';
import { ContactDto } from 'src/types/dto/ContactDto';

interface GetAllContactsAction {
  type: typeof GET_ALL_CONTACTS;
  payload: { contacts: ContactDto[] };
}

interface GetContactAction {
  type: typeof GET_CONTACT;
  payload: { id: string };
}

export type ContactActionTypes = GetAllContactsAction | GetContactAction;
