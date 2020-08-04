import React from 'react';

const person = (props) => {
    return (
    <div>
        <p onClick = {props.click}>I'm {props.name} and {props.age} years old</p>
        <p>{props.children}</p>
        <input 
            onChange = {props.textChange} 
            value = {props.name} />
    </div>
    )
};


export default person;