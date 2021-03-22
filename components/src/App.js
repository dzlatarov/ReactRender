import React from 'react';
import './App.css';
import SearchBar from './components/HandlingUserInputWithForms/SearchBar';

class App extends React.Component {
  onSearchHandler(term) {
    console.log(term);
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
