import React from 'react';

const person = (props) => {
    return (
    <div>
    <p>I'm {props.name} and {props.age} years old</p>
    {props.children}
    </div>
    )
};


export default person;