// outsource dependencies

// local dependencies
import TYPE from './types';

interface IInitial {
    initialized: boolean,
    expectAnswer: boolean,
    errorMessage: object,
    countries: [],
    user: object
}

const initial: IInitial = {
    initialized: false,
    expectAnswer: false,
    errorMessage: {},
    countries: [],
    user: {}
};

export default function (state: IInitial = initial, action: any) {
    const { type, ...options } = action;
    switch (type) {
        default:
            break;
        case TYPE.CLEAR:
            state = { ...state, ...initial };
            break;
        case TYPE.META:
            state = { ...state, ...options };
            break;
    }
    return state;
}

export const selector = (state: any) => state.signIn;
