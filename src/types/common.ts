import { Dispatch, SetStateAction } from 'react';
import { store } from 'src/store/store';

export type State<TState> = [TState, Dispatch<SetStateAction<TState>>];

export type AppDispatchType = typeof store.dispatch;
export type StateType = ReturnType<typeof store.getState>;
