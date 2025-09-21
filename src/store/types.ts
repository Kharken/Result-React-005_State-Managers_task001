import {
  ADD_TO_FAVORITES,
  GET_CONTACTS_ACTION,
  GET_CONTACTS_SUCCESS_ACTION,
  GET_GROUPS_ACTION,
  GET_GROUPS_SUCCESS_ACTION,
  RESET_CONTACTS_ACTION,
  RESET_GROUPS_ACTION,
} from 'src/store/actions';

import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: {
    id: string;
  };
}

export interface GetContactsAction {
  type: typeof GET_CONTACTS_ACTION;
}

export interface GetContactsSuccessAction {
  type: typeof GET_CONTACTS_SUCCESS_ACTION;
  payload: ContactDto[];
}
export interface ResetContactsAction {
  type: typeof RESET_CONTACTS_ACTION;
}

export interface GetGroupsAction {
  type: typeof GET_GROUPS_ACTION;
}

export interface GetGroupsSuccessAction {
  type: typeof GET_GROUPS_SUCCESS_ACTION;
  payload: GroupContactsDto[];
}
export interface ResetGroupsAction {
  type: typeof RESET_GROUPS_ACTION;
}

export type ActionType =
  | AddToFavoritesAction
  | GetContactsAction
  | GetContactsSuccessAction
  | ResetContactsAction
  | GetGroupsAction
  | GetGroupsSuccessAction
  | ResetGroupsAction;

export interface ContactsInitialState {
  loading: boolean;
  contacts: ContactDto[];
}

export interface GroupsInitialState {
  loading: boolean;
  groups: GroupContactsDto[];
}
