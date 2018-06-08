import React, { Component } from 'react';
import List from '../containers/List';
import RegisterForm from '../components/RegisterForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="title is-1" >List </div>
        <List />
        <RegisterForm />
      </div>
    );
  }
}

export default App;
