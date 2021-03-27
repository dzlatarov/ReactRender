import React, { useState } from 'react'
import { Accordion } from './components/Accordion'
import { Dropdown } from './components/Dropdown'
import { Search } from './components/Search'
import { Translate } from './components/Translate'
import { Route } from './components/Route'

const items = [
    {
        title: 'What is React',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How to use React',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]


export const App = () => {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label='Select a Color'
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            </Route>
            <Route path="/translate">
                <Translate items={items} />
            </Route>
        </div>
    )
}
