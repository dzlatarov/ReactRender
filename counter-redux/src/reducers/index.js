import { combineReducers } from 'redux'

const initialCount = 0
export const counterReducer = (count = initialCount, action) => {
    switch (action.type) {
        case 'increment':
            return count + 1
        case 'decrement':
            return count - 1
        case 'reset':
            return initialCount
        default:
            return count
    }
}

export default combineReducers({
    count: counterReducer
})