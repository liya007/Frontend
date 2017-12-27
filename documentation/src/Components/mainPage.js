import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router,Route,  Link} from 'react-router-dom';

class MainPage extends React.Component{

    constructor(props)
    {
        super ();
        console.log(this.props);
    }
    render ()
    {

        return(

            <div className = "mainBody">
            <div className = "partOfBody">
            <Link to = "./titul" className= "Linkpos">
                <span className = "span2" >Титул</span>
            </Link>
            </div>

            <div className = "partOfBody">
            <Link to = "./otchet" className= "Linkpos">
                <span className = "span2" >Отчеты</span>
            </Link>
            </div>

            <div className = "partOfBody">
            <Link to = "/gost" className= "Linkpos">
                <span className = "span2" >Госты</span>
            </Link>
            </div>            
            </div>
       
        );
    }
}

 export default MainPage;