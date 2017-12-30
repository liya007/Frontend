import React, { Component } from 'react';

const Nowdoc=()=>(
{
    
    render(){
        console.log("+");
        return(
        <div>
            <b>Или, быть может, Вы хотели бы: </b>
            <p><input type = "radio" name = "document" value = "allDocuments"
            onClick={this.newState2}    />Показать все текущие документы</p>
        </div>
    );}
}
);
export default Nowdoc;