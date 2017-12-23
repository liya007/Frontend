import React, { Component } from 'react';
import './App.css';




class MainPage extends React.Component{
    render ()
    {
        return(

            <div className = "mainBody">
            <div className = "partOfBody">
            <a  className="third" href = "/">
                <span className = "span2" >Титул</span>
            </a>
            </div>

            <div className = "partOfBody">
            <a  className="third" href = "/">
                <span className = "span2" >отчеты</span>
            </a>
            </div>

            <div className = "partOfBody">
            <a  className="third" href = "/">
                <span className = "span2" >госты</span>
            </a>
            </div>            
            </div>
       
        );
    }
}

 export default MainPage;