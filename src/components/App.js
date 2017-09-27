import React, { Component } from 'react';
import ListOfPullRequests from './ListOfPullRequests';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <ListOfPullRequests />
      </div>
    );
  }
}

export default App;
