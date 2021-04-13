import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

const Button = () => {
    const renderButton = value => {
        return value === 'English' ? 'Submit' : 'Voorleggen';
    }

    const renderColor = color => {
        return <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {(value) => renderButton(value)}
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