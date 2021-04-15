import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

const LanguageSelector = () => {
    const contextStore = useContext(LanguageContext);
    return (
        <div>
            Select a language:
            <i className="flag us" onClick={() => contextStore.onLanguageChanger('English')} style={{ cursor: 'pointer', marginLeft: '1em' }} />
            <i className="flag nl" onClick={() => contextStore.onLanguageChanger('Dutch')} style={{ cursor: 'pointer' }} />
        </div>
    )
}

export default LanguageSelector
