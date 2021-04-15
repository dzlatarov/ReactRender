import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

const Button = () => {
    const renderButton = language => {
        return language === 'English' ? 'Submit' : 'Voorleggen';
    }

    const renderColor = color => {
        return <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {({ language }) => renderButton(language)}
            </LanguageContext.Consumer>
        </button>
    }

    return (
        <ColorContext.Consumer>
            {(color) => renderColor(color)}
        </ColorContext.Consumer>
    )
}

export default Button