import React, { Component } from 'react';
import List from '../containers/List';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title is-1" >List </div>
        <List />
      </div>
    );
  }
}

export default App;
