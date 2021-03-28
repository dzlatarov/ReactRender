import React, { useState } from 'react'

const SearchBar = ({ onSubmit }) => {
    const [inputValue, setInputValue] = useState('')

    const onSubmitHandler = e => {
        e.preventDefault()

        onSubmit(inputValue)
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onSubmitHandler}>
                <div className="field">
                    <label>Video Search</label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar
