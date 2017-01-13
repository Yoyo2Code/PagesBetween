import React, { Component } from 'react';

import SearchBar from './components/search_bar';
import NavBar from './components/nav_bar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
      </div>
    );
  }
}

export default App;
