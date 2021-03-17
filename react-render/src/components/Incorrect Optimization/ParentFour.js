import React, { useState } from 'react'
import { MemoizedChildFive } from './ChildFive';

export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Danail')

    // const person = {
    //     fname: 'Clark',
    //     lname: 'Kent'
    // }

    const handleClick = () => { }

    console.log('ParentFour Render');
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Zlatarov')}>Change name</button>
            <MemoizedChildFive name={name} handleClick={handleClick} />
        </div>
    )
}
