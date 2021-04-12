import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Button = () => {
    const renderButton = value => {
        return value === 'English' ? 'Submit' : 'Voorleggen';
    }

    return (
        <button className="ui button primary">
            <LanguageContext.Consumer>
                {(value) => renderButton(value)}
            </LanguageContext.Consumer>
        </button>
    )
}

export default Button