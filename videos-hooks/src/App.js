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

    componentDidMount() {
        this.onSearchHandler('buildings')
    }

    onSearchHandler = async inputValue => {
        const response = await youtube.get('/search', {
            params: { q: inputValue }
        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchHandler} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App
