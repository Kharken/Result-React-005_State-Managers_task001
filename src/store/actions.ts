export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES' as const;

export const addToFavoritesAction = (id: string) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: {
      id,
    },
  };
};
