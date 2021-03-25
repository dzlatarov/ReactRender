import React, { useState } from 'react'

export const Search = () => {
    const [term, setTerm] = useState('')

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input
                    type="text"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
