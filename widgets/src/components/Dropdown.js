import React, { useState, useEffect, useRef } from 'react'

export const Dropdown = ({ label, selected, onSelectedChange, options }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const bodyClick = event => {
            if (ref.current && ref.current.contains(event.target)) {
                return
            }

            setOpen(false)
        }

        document.body.addEventListener('click', bodyClick)

        return () => {
            document.body.removeEventListener('click', bodyClick)
        }
    }, [])

    const renderedOptions = options.map(option => {
        if (option.value === selected.value) {
            return null
        }

        return (
            <div
                key={option.value}
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    const visibleActive = open ? 'visible active' : ''
    const visibleTransition = open ? 'visible transition' : ''

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${visibleActive}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${visibleTransition}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
