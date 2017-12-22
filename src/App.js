import React, { Component } from 'react';
import Components from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Components</h1>
        </header>
        <div className="App-intro">
          <Components />
        </div>
      </div>
    );
  }
}

export default App;
