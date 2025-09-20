import { combineReducers, createStore } from 'redux';
import { contactsReducer } from 'src/store/reducers/contacts-reducer';
import { groupsReducer } from 'src/store/reducers/groups-reducer';

export const store = createStore(
  combineReducers({ contacts: contactsReducer, groups: groupsReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
