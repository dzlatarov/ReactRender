import React, { Component } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: []
        }
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar />
            </div>
        )
    }
}

export default App
