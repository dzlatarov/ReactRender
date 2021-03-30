import React from 'react'
import SongDetail from './SongDetail'
import SongList from './SongList'

const App = () => {
    return (
        <div className="ui container grid" style={{ marginTop: '1em' }}>
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App
