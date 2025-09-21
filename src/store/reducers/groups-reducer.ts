import { ActionType, GroupsInitialState } from 'src/store/types';
import {
  GET_GROUPS_ACTION,
  GET_GROUPS_SUCCESS_ACTION,
  RESET_GROUPS_ACTION,
} from 'src/store/actions';

const initialState: GroupsInitialState = {
  loading: false,
  groups: [],
};

const groupsReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_GROUPS_ACTION:
      return {
        ...state,
        loading: true,
      };
    case GET_GROUPS_SUCCESS_ACTION:
      return {
        loading: false,
        groups: action.payload,
      };
    case RESET_GROUPS_ACTION:
      return {
        loading: false,
        groups: [],
      };
    default:
      return state;
  }
};

export { groupsReducer };
