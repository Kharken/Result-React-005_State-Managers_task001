import { GET_ALL_CONTACTS, GET_CONTACT } from 'src/store/actions';

interface GetAllContactsAction {
  type: typeof GET_ALL_CONTACTS;
}

interface GetContactAction {
  type: typeof GET_CONTACT;
  payload: { id: string };
}

export type ContactActionTypes = GetAllContactsAction | GetContactAction;
