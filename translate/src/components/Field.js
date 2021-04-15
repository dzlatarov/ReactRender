import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Field = () => {
    const { language } = useContext(LanguageContext);
    const renderField = value => {
        return value === 'English' ? 'Name' : 'Naam';
    };

    return (
        <div className="ui field">
            {renderField(language)}
            <input />
        </div>
    );
}

export default Field