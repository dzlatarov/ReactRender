import React from 'react';
import axios from 'axios'
import SearchBar from './components/HandlingUserInputWithForms/SearchBar';
import { CLIENT_ID } from './components/HandlingUserInputWithForms/Config'
import { ImageList } from './components/HandlingUserInputWithForms/ImageList';

class App extends React.Component {
  state = { images: [] }

  onSearchHandler = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`
      }
    })

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="App ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchHandler} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
