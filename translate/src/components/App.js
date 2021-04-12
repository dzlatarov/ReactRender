import React, { useState } from 'react'
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext'

const App = () => {
    const [language, setLanguage] = useState('English')

    const onLanguageChanger = language => {
        setLanguage(language);
    }

    return (
        <div className="ui container">
            <div>
                Select a language:
                <i className="flag us" onClick={() => onLanguageChanger('English')} style={{ cursor: 'pointer', marginLeft: '1em' }} />
                <i className="flag nl" onClick={() => onLanguageChanger('Dutch')} style={{ cursor: 'pointer' }} />
            </div>
            <LanguageContext.Provider value={language}>
                <UserCreate />
            </LanguageContext.Provider>
        </div>
    )
}

export default App
