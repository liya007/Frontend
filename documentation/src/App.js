import React, { Component } from 'react';

import MyHeader from './Components/MyHeader';
import MainPage from './Components/mainPage';
import MyFooter from './Components/MyFooter';
import Titul from './Components/Student/Titul';
import ChoosingDocument from './Components/ChoosingDocument';

import { BrowserRouter as Router,
  Route,
  Link,
  Switch} from 'react-router-dom';

import './App.css';

class App extends Component {

  render() {
    return (

     <Router>
       <div>

       <Route path="/" component={MyHeader}/>
       <Route exact path="/" component={MainPage}/>
       <Route path="/choosing" component={ChoosingDocument}/>
       <Route path = "/titul" component= {Titul} />
       <Route path = "/otchet" component= {Titul} />
       {//<Route path = "/gost" component= {}/>
       }
       <Route path="/" component={MyFooter}/>
       </div>
     </Router>

    );
  }
}



export default App;
