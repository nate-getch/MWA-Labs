import { actions } from './action';

export function rootReducer(state, action) {
    switch (action.type) {
        case actions.INCREMENT:
            return Object.assign({}, state, {
                count: ++state.count,
            });

        case actions.DECREMENT:
            return Object.assign({}, state, {
                // action.amount is passed from respective component
                count: state.count - action.amount,
            });

        case actions.RESET:
            return Object.assign({}, state, {
                count: 0,
            });
        default:
            return state;
    }
}
