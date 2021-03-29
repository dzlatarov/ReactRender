import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

const SongList = ({ songs, selectSong }) => {
    const renderedSongs = songs.map((song, index) => {
        return (
            <div className="item" key={index}>
                <div className="right floated content">
                    <button onClick={() => selectSong(song)} className="ui button primary">Select</button>
                </div>
                <div className="content">
                    {song.title}
                </div>
            </div>
        )
    })
    return (
        <div className="ui divided list">
            {renderedSongs}
        </div>
    )
}


const mapStateToProps = state => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList)
