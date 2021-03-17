import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive';

export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Danail')

    // const person = {
    //     fname: 'Clark',
    //     lname: 'Kent'
    // }

    // const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => { }

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render');
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
            <button onClick={() => setName('Zlatarov')}>Change name</button>
            {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
            <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
        </div>
    )
}
