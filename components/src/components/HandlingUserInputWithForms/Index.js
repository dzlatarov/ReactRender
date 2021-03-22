import React, { Component } from 'react'
import unsplash from '../HandlingUserInputWithForms/api/unsplash'
import { ImageList } from './ImageList';
import SearchBar from './SearchBar';

class Index extends Component {
    state = { images: [] }

    onSearchHandler = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        })

        this.setState({ images: response.data.results })
    }
    render() {
        return (
            <div>
                <div className="App ui container" style={{ marginTop: '10px' }}>
                    <SearchBar onSubmit={this.onSearchHandler} />
                    <ImageList images={this.state.images} />
                </div>
            </div>
        )
    }
}

export default Index
