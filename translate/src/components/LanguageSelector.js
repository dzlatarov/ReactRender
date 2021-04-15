import React from 'react'

const LanguageSelector = ({ onLanguageChanger }) => {
    return (
        <div>
            Select a language:
            <i className="flag us" onClick={() => onLanguageChanger('English')} style={{ cursor: 'pointer', marginLeft: '1em' }} />
            <i className="flag nl" onClick={() => onLanguageChanger('Dutch')} style={{ cursor: 'pointer' }} />
        </div>
    )
}

export default LanguageSelector
