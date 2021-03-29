import { combineReducers } from 'redux'

export const songsReducer = () => {
    return [
        { title: "U Can't Touch This", duration: '3:40' },
        { title: "Black Or White", duration: '2:30' },
        { title: "Gangsta's Paradise", duration: '1:50' },
        { title: "Barbie Girl ", duration: '3:15' },
    ]
}

export const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})