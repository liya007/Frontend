import React, { Component } from 'react';

function Button (props){

    return(
        <div>
            {}
            <div><button>{props.name}</button> <button>Предварительный просмотр</button></div>
        </div>
    );

}
export default Button;