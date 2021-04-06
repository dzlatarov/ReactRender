import {SIGN_IN, SIGN_OUT} from '../actions/types'

const INITIAL = {
    isSignedIn: null
}

export const authReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true }
        case SIGN_OUT:
            return { ...state, isSignedIn: false }
        default:
            return state
    }
}