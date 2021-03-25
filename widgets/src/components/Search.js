import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const Search = () => {
    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])

    console.log(results);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }

        search()
    }, [term])

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Search Term</label>
                <input
                    type="text"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
