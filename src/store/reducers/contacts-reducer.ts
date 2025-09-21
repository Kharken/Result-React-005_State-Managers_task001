import { ActionType, ContactsInitialState } from 'src/store/types';
import {
  ADD_TO_FAVORITES,
  GET_CONTACTS_ACTION,
  GET_CONTACTS_SUCCESS_ACTION,
  RESET_CONTACTS_ACTION,
} from 'src/store/actions';

const initialState: ContactsInitialState = {
  loading: false,
  contacts: [],
};

const contactsReducer = (
  state = initialState,
  action: ActionType,
): ContactsInitialState => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === action.payload.id) {
            return {
              ...contact,
              isFavorite: true,
            };
          }
          return contact;
        }),
      };
    case GET_CONTACTS_ACTION:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTACTS_SUCCESS_ACTION:
      return {
        loading: false,
        contacts: action.payload.map((item) => ({
          ...item,
          isFavorite: false,
        })),
      };
    case RESET_CONTACTS_ACTION:
      return {
        loading: false,
        contacts: [],
      };
    default:
      return state;
  }
};

export { contactsReducer };
