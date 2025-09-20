import { ADD_TO_FAVORITES } from 'src/store/actions';

export interface AddToFavoritesAction {
  type: typeof ADD_TO_FAVORITES;
  payload: {
    id: string;
  };
}

export type ActionType = AddToFavoritesAction;
