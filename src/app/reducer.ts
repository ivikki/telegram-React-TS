// local dependencies
import { APP_TYPES } from './types';

interface appInitState {
    initialized: boolean,
    expectAnswer: boolean,
    user: any
}

const appInitialState: appInitState = {
    initialized: false,
    expectAnswer: false,
    user: null
};

// app-reducer
export default function (state: appInitState = appInitialState, action: any) {
    const { type, ...options } = action;
    switch (type) {
        default:
            break;
        case APP_TYPES.CLEAR:
            state = { ...state, ...appInitialState };
            break;
        case APP_TYPES.META:
            state = { ...state, ...options };
            break;
    }
    return state;
}


// app data selector
export const selector = (state: any) => state.app;