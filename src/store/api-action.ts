import { apiRouteConfig } from 'src/api/api-routes';
import {
  GET_CONTACTS_ACTION,
  GET_CONTACTS_SUCCESS_ACTION,
  GET_GROUPS_ACTION,
  GET_GROUPS_SUCCESS_ACTION,
  RESET_CONTACTS_ACTION,
  RESET_GROUPS_ACTION,
} from 'src/store/actions';
import { BASE_URL } from 'src/api/api';
import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import { Dispatch } from 'redux';

export const getContacts = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: GET_CONTACTS_ACTION });

    const result = await fetch(`${BASE_URL}${apiRouteConfig.ContactsApiRoute}`);
    const data: ContactDto[] = await result.json();

    if (data && data.length > 0) {
      const contacts = data.map((item) => ({
        ...item,
        isFavorite: false,
      }));

      dispatch({ type: GET_CONTACTS_SUCCESS_ACTION, payload: contacts });
    } else {
      dispatch({ type: RESET_CONTACTS_ACTION });
    }
  };
};

export const getGroups = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: GET_GROUPS_ACTION });

    const result = await fetch(`${BASE_URL}${apiRouteConfig.GroupsApiRoute}`);
    const data: GroupContactsDto[] = await result.json();

    if (data && data.length > 0) {
      dispatch({ type: GET_GROUPS_SUCCESS_ACTION, payload: data });
    } else {
      dispatch({ type: RESET_GROUPS_ACTION });
    }
  };
};
