import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  
  state = {
    Persons: [
      { id: 'asdsad', name: 'Max', age: 28 },
      { id: 'afsdf', name: 'Manu', age: 35 },
      { id: 'sfsertret', name: 'Stephanie', age: 20 }
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
  
  deletePersonHandler = (personIndex) => {
    //this is just a reference copy..changes are not immutable
    //const personList = this.state.Persons;
    //better use slice to copy into new obj
    //const personList = this.state.Persons.slice;
    const personList = [...this.state.Persons];
    personList.splice(personIndex,1);
    this.setState({Persons: personList});
  }

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
            {
              this.state.Persons.map((person, index) => {
                return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age} 
                  key={person.id}/>
              })
            }
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
