import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Field = () => {
    const renderField = value => {
        return value === 'English' ? 'Name' : 'Naam';
    }

    return (
        <div className="ui field">
            <LanguageContext.Consumer>
                {(value) => renderField(value)}
            </LanguageContext.Consumer>
            <input />
        </div>
    )
}

export default Field