import { SIGN_IN, SIGN_OUT } from '../actions/types'

const INITIAL = {
    isSignedIn: null,
    userId: null
}

export const authReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload }
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null }
        default:
            return state
    }
}