import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ count }) => {
    return (
        <div className="ui segment">
            <div className="ui button">Increment Count</div>
            <div className="ui button">Decrement Count</div>
            Current Count: <span>{count}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        count: state.counterReducer
    }
}

export default connect(mapStateToProps)(Counter)