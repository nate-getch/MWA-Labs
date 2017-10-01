import { actions } from './action';

export interface IAppState {
    count: number;
}

export const INITIAL_STATE: IAppState = {
    count: 0
}
