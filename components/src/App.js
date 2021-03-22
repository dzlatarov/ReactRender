import React from 'react';
import axios from 'axios'
import SearchBar from './components/HandlingUserInputWithForms/SearchBar';
import { CLIENT_ID } from './components/HandlingUserInputWithForms/Config'

class App extends React.Component {
  onSearchHandler(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`
      }
    })
  }

  render() {
    return (
      <div className="App ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchHandler} />
      </div>
    );
  }
}

export default App;
