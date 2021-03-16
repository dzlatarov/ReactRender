import React, { useState } from 'react'

const initState = {
    fname: 'Clark',
    lname: 'Kent'
}

export const ObjecUseState = () => {
    const [person, setPerson] = useState(initState)

    const handler = () => {
        // person.fname = 'Bruce'
        // person.lname = 'Wayne'
        // setPerson(person)

        const newPerson = { ...person }
        newPerson.fname = 'Bruce'
        newPerson.lname = 'Wayne'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render');
    return (
        <div>
            <button onClick={handler}>{person.fname} {person.lname}</button>
        </div>
    )
}
