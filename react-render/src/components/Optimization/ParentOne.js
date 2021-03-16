import React, { useState } from 'react'

export const ParentOne = ({ children, newCount }) => {
    const [count, setCount] = useState(0)

    console.log('ParentOne Render');
    return (
        <div>
            <button onClick={() => setCount((c) => c + 1)}>Count - {count} - {newCount}</button>
            {children}
        </div>
    )
}
