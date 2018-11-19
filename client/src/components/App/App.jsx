import React, { Component } from 'react';
import SearchResults from '../SearchResults';

import './App.css'

class App extends Component {
  render() {
    return (
        <div className="wrap">
          <h1 className="page-title">Latest News</h1>
          <SearchResults />
        </div>
    );
  }
}

export default App;
