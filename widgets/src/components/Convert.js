import React, { useState, useEffect } from 'react'

export const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log('New language or text');
    }, [language, text])
    return (
        <div>

        </div>
    )
}
