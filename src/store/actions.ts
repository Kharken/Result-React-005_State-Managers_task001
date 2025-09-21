export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES' as const;

export const GET_CONTACTS_ACTION = 'GET_CONTACTS_ACTION' as const;

export const GET_CONTACTS_SUCCESS_ACTION =
  'GET_CONTACTS_SUCCESS_ACTION' as const;

export const RESET_CONTACTS_ACTION = 'RESET_CONTACTS_ACTION' as const;

export const GET_GROUPS_ACTION = 'GET_GROUPS_ACTION' as const;

export const GET_GROUPS_SUCCESS_ACTION = 'GET_GROUPS_SUCCESS_ACTION' as const;

export const RESET_GROUPS_ACTION = 'RESET_GROUPS_ACTION' as const;

export const addToFavoritesAction = (id: string) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: {
      id,
    },
  };
};
