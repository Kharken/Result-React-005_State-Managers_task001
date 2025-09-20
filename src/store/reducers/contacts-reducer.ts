import contacts from 'src/__data__/contacts.json';
import { ContactDto } from 'src/types/dto/ContactDto';
import { ActionType } from 'src/store/types';
import { ADD_TO_FAVORITES } from 'src/store/actions';

const initialState: ContactDto[] = contacts.map((c) => ({
  ...c,
  isFavorite: false,
}));

const contactsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return state.map((contact) => {
        if (contact.id === action.payload.id) {
          return {
            ...contact,
            isFavorite: true,
          };
        }
        return contact;
      });
    default:
      return state;
  }
};

export { contactsReducer };
