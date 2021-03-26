import React, { useState } from 'react'
import { Dropdown } from './Dropdown'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

export const Translate = () => {
    const [language, setLanguage] = useState(options[0].label)
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
        </div>
    )
}
