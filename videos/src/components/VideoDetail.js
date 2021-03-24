import React from 'react'

export const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {video.snippet.title}
        </div>
    )
}
