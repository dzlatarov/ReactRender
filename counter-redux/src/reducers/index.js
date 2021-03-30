import { combineReducers } from 'redux'

export const counterReducer = (count = 0, action) => {
    switch (action.type) {
        case 'increment':
            return count + 1
        case 'decrement':
            return count - 1
        default:
            return count
    }
}

export default combineReducers({
    counterReducer: counterReducer
})