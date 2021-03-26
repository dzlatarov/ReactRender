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
    return (
        <div>
            <Dropdown selected={language} onSelectedChange={setLanguage} options={options} />
        </div>
    )
}
