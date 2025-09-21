import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { contactsReducer } from 'src/store/reducers/contacts-reducer';
import { groupsReducer } from 'src/store/reducers/groups-reducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  groups: groupsReducer,
});

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
