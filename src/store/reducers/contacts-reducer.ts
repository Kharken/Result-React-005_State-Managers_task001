import { GET_ALL_CONTACTS, GET_CONTACT } from 'src/store/actions';
import contacts from 'src/__data__/contacts.json';
import { ContactActionTypes } from 'src/store/types';

export const contactsReducer = (
  state = contacts,
  action: ContactActionTypes,
) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return state;
    case GET_CONTACT:
      return state.filter((contact) => contact.id === action.payload.id);
    default:
      return state;
  }
};
