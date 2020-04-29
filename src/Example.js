import React from "react";

function Example(props){
    console.log(props)
    return (
        <h2>My favorite color is {props.color}</h2>
    )
}

export default Example;