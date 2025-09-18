import { combineReducers, createStore } from 'redux';
import { contactsReducer } from 'src/store/reducers/contacts-reducer';

export const store = createStore(
  combineReducers({ contacts: contactsReducer }),
);
