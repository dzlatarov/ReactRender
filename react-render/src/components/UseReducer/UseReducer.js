import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    console.log('UseReducer Render');
    return (
        <div>
            Count = {count}
            <div>
                <button onClick={() => dispatch({ type: 'increment' })}>Increment count </button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Decrement count </button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset count </button>
            </div>
        </div>
    )
}
