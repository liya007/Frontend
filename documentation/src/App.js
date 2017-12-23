import React, { Component } from 'react';

import MyHeader from './MyHeader';
import MainPage from './mainPage';
import ChoosingActivity from './ChoosingActivity';
import MyFooter from './MyFooter';
import Home from './Home';

import { BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom';


import './App.css';
import mainPage from './mainPage';

class App extends Component {

  render() {
    return (

     <Router>
       <div>

       <Route path="/" component={MyHeader}/>
       <Route exact path="/" component={mainPage}/>
       <Route path="/choosing" component={ChoosingActivity}/>
       <Route path="/" component={MyFooter}/>
       </div>



     </Router>

    );
  }
}



export default App;
