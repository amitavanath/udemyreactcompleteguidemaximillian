import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="Max" age = "30"/>
        <Person name="Manu" age = "35">My hobbies are fun fun</Person>
        <Person name="Stephanie" age = "26"/>
      </div>
    )} 
}

export default App;
