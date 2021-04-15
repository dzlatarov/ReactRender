import React, { useState } from 'react'

const Context = React.createContext('english');

export const LanguageStore = (props) => {
    const [language, setLanguage] = useState('English');

    const onLanguageChanger = language => {
        setLanguage(language);
    };

    return (
        <Context.Provider value={{ language, onLanguageChanger }}>
            {props.children}
        </Context.Provider>
    );
};

export default Context;