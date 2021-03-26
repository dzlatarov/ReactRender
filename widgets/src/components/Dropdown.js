import React, { useState } from 'react'

export const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)

    const renderedOptions = options.map(option => {
        if (option.label === selected) {
            return null
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option.label)}
            >
                {option.label}
            </div>
        )
    })

    const visibleActive = open ? 'visible active' : ''
    const visibleTransition = open ? 'visible transition' : ''

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${visibleActive}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected}</div>
                    <div className={`menu ${visibleTransition}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
