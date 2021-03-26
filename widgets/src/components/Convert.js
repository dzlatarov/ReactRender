import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { KEY } from './api/Config'

export const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('Helo there')
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedText(text)
        }, 500);

        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    q: debouncedText,
                    target: language.value,
                    key: KEY
                })

            setTranslated(data.data.translations[0].translatedText)
        }
        if (debouncedText) {
            doTranslation()
        }

    }, [language, debouncedText])
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}
