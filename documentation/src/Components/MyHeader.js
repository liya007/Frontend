import React, { Component } from 'react';
import Logo from './Logo2.bmp';
import '../App.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';

class MyHeader extends React.Component{

    render()
    {
        return(
            <header className="App-header">
                <div className = "first">
                    <div className = "second">
                        <Link to = "/" className= "aa">
                        <img src={Logo} className="App-logo"  />
                        <span className = "span1">DocApp</span>
                        </Link> 
                        <div className = "invisible"></div>
           
                        <div className = "entry">  {/* выделить в компоненту*/}
                            <Link to="./choosing">
                                <span>Вход</span>
                            </Link>  
                        </div>
                    </div> 
                </div>
            </header>
        );
    }
}
export default MyHeader;