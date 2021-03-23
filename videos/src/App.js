import React, { Component } from 'react'
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import { VideoList } from './components/VideoList'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: []
        }
    }

    onSearchHandler = async inputValue => {
        const response = await youtube.get('/search', {
            params: { q: inputValue }
        })

        this.setState({
            videos: response.data.items
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchHandler} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App
