import React, { Component } from 'react';

import MyHeader from './Components/MyHeader';
import MainPage from './Components/mainPage';
import MyFooter from './Components/MyFooter';
import Titul from './Components/Student/Titul';
import Gost from './Components/Student/Gost';
//import ChoosingDocument from './Components/ChoosingDocument';


import { BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    console.log("+");
    return (

     <Router>
       <div>

       <Route path="/" component={MyHeader}/>
       <Route exact path="/" component={MainPage}/>
       <Route exact path ="/choosing" component={Titul}/>
       <Route exact path = "/titul" component= {Titul}/>
       <Route exact path = "/otchet" component= {Titul}/>
       <Route path = "/gost" component= {Gost}/>
       
       <Route path="/" component={MyFooter}/>
       </div>
     </Router>

    );
  }
}



export default App;
