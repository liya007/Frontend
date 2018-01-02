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
                <span className = "span2" >Титульные листы</span>
            </Link>
            </div>

            <div className = "partOfBody">
            <Link to = "./otchet" className= "Linkpos">
                <span className = "span2" >Структуры отчетов и пояснительных записок</span>
            </Link>
            </div>

            <div className = "partOfBody">
            <Link to = "/gost" className= "Linkpos">
                <span className = "span2"  >ГОСТы</span>
            </Link>
            </div>            
            </div>
       
        );
    }
}

 export default MainPage;