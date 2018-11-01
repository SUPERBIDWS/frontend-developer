import React, { Component } from 'react';

import './styles.css';

import Header from './Components/Header';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
