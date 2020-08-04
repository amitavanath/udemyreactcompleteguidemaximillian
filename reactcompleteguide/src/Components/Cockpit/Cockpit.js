import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi I'm a test react APP !!</h1>
            <p>Lets see things working....</p>
            <button onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;