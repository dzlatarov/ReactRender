import React, { Component } from 'react'
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import { VideoDetail } from './components/VideoDetail'
import { VideoList } from './components/VideoList'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
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

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchHandler} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App
