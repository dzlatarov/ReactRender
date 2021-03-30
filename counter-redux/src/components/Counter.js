import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../actions'

const Counter = ({ count, increment, decrement, reset }) => {
    return (
        <div className="ui segment">
            <div onClick={increment} className="ui button">Increment Count</div>
            <div onClick={decrement} className="ui button">Decrement Count</div>
            <div onClick={reset} className="ui button">Reset Count</div>
            Current Count: <span>{count}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, {
    increment,
    decrement,
    reset
})(Counter)