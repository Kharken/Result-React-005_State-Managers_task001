import { Dispatch, SetStateAction } from 'react';
import { store } from 'src/store/store';
import { ThunkDispatch } from 'redux-thunk';
import { ActionType } from 'src/store/types';

export type State<TState> = [TState, Dispatch<SetStateAction<TState>>];

export type AppDispatchType = ThunkDispatch<StateType, void, ActionType>;
export type StateType = ReturnType<typeof store.getState>;
