import React from 'react'
import { connect } from 'react-redux'

const Counter = () => {
    return (
        <div className="ui segment">
            <div className="ui button">Increment Count</div>
            <div className="ui button">Decrement Count</div>
            Current Count: <span>0</span>
        </div>
    )
}

export default connect()(Counter)