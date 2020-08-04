import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';

class App extends Component {
  
  state = {
    Persons: [
      { id: 'asdsad', name: 'Max', age: 28 },
      { id: 'afsdf', name: 'Manu', age: 35 },
      { id: 'sfsertret', name: 'Stephanie', age: 20 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.Persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.Persons];

    persons[personIndex] = person;

    this.setState({Persons: persons});
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
           <Persons 
              Persons={this.state.Persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler} />
          </div>
      );
    }

    return (
      <div className="App">
        <Cockpit clicked={this.togglePersonsHandler} />
        {persons}
        
      </div>
    );
  }
}

export default App;
