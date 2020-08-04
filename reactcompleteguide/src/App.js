import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = (props) => {
  
  const [personState, setpersonStatetate] = useState({
    Persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 35 },
      { name: 'Stephanie', age: 20 }
    ]
  });

  const switchNameHandler = () => {
    setpersonStatetate({
      Persons: [
        { name: 'Maximillian', age: 28 },
        { name: 'Manus', age: 50 },
        { name: 'Stephanies', age: 120 }
      ]
    });
  };
  
  
  return (
    <div className="App">
      <h1>Hi I'm a test react APP !!</h1>
      <p>Lets see things working....</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.Persons[0].name} age = {personState.Persons[0].age}/>
      <Person name={personState.Persons[1].name} age = {personState.Persons[1].age}>My hobbies are fun fun</Person>
      <Person name={personState.Persons[2].name} age = {personState.Persons[2].age}/>
    </div>
  );
   
}

export default App;
