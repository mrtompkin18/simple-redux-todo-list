import React, { Component } from 'react';
import DisplayList from '../containers/display-list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className = "title is-1" >List of todos </div>
        <DisplayList/>
      </div>
    );
  }
}

export default App;
