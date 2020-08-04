import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    Persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 35 },
      { name: 'Stephanie', age: 20 }
    ],
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      Persons: [
        { name: newName, age: 28 },
        { name: 'Manus', age: 50 },
        { name: 'Stephanies', age: 120 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      Persons: [
        { name: event.target.value, age: 28 },
        { name: 'Manus', age: 50 },
        { name: 'Stephanies', age: 120 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
            <Person name={this.state.Persons[0].name} 
                    age = {this.state.Persons[0].age}
                    textChange = {this.nameChangedHandler}/>
            <Person name={this.state.Persons[1].name} 
                    age = {this.state.Persons[1].age}
                    click = {this.switchNameHandler.bind(this, "Max!!")}>
                      My hobbies are fun fun</Person>
            <Person name={this.state.Persons[2].name} 
                    age = {this.state.Persons[2].age}/>
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a test react APP !!</h1>
        <p>Lets see things working....</p>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
        
      </div>
    );
  }
  
  
   
}

export default App;
