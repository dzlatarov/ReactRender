import React, { useState } from 'react'

const initState = ['Batman', 'Superman']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const handler = () => {
        // persons.push('The Flash')
        // persons.push('Wonder Woman')
        // setPersons(persons)
        const newPersons = [...persons]
        newPersons.push('The Flash')
        newPersons.push('Wonder Woman')
        setPersons(newPersons)
    }

    console.log('ArrayUseState Render');
    return (
        <div>
            <button onClick={handler}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>
                ))
            }
        </div>
    )
}
