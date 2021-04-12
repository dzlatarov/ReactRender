import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

const Button = () => {
    const language = useContext(LanguageContext);
    console.log(language);
    return (
        <button className="ui button primary">
            Submit
        </button>
    )
}

export default Button