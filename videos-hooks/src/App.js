import React, { useState, useEffect } from 'react'
import youtube from './api/youtube'
import SearchBar from './components/SearchBar'
import { VideoDetail } from './components/VideoDetail'
import { VideoList } from './components/VideoList'

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        onSearchHandler('buildings')
    }, [])

    const onSearchHandler = async inputValue => {
        const response = await youtube.get('/search', {
            params: { q: inputValue }
        })
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }   

    return (
        <div className="ui container">
            <SearchBar onSubmit={onSearchHandler} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            onVideoSelect={video => setSelectedVideo(video)}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
