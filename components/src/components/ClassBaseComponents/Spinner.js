import React from 'react'

function Spinner({ message }) {
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{message}</div>
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner