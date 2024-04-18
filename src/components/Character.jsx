import React from "react";

function Character (props) {
    return  (
    <div className='character'>
        <h2>`${props.name}`</h2>
        <img src={props.image}></img>
        <button>This Character</button>
    </div>
    );
} 

export default Character;