import React, { Component } from 'react'
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: []
        }
    }

    onSearchHandler = inputValue => {
        console.log(inputValue);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchHandler} />
            </div>
        )
    }
}

export default App
