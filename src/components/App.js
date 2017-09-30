import React, { Component } from 'react';
import ListOfPullRequests from './ListOfPullRequests';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Lambda School Pull-Request Tracker</h2>
          <ListOfPullRequests />
        </div>
      </div>
    );
  }
}

export default App;
