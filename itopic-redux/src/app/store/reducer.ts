// import { ITopic } from './topic'
import { IAppState } from './store'
import { actions } from './action'

export const initialState: IAppState = {
    data: [
        {
            id: 0,
            name: 'Learning Node',
            topic: 'Node JS',
        },
        {
            id: 1,
            name: 'Learning MongoDB',
            topic: 'MongoDB',
        },
        {
            id: 2,
            name: 'Learning TypeScript',
            topic: 'TypeScript',
        }
    ]
}
let nextId = 3;

function addTopic(state, action): IAppState {
    console.log([...state.data]);
    return Object.assign({}, state,
        {
            // preserve the old state, and push the new data as object
            data: [...state.data, {
                id: nextId++,
                name: action.text,
                topic: action.text
            }]
        })
}

export function reducer(state: IAppState = initialState, action) {
    switch (action.type) {
        case actions.ADD_TOPIC:
            return addTopic(state, action);
        default:
            return state;
    }
}
