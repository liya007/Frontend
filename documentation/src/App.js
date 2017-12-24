import React, { Component } from 'react';

import MyHeader from './Components/MyHeader';
import MainPage from './Components/mainPage';
import ChoosingActivity from './Components/ChoosingActivity';
import MyFooter from './Components/MyFooter';
import Home from './Components/Home';

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
       <Route path="/choosing" component={ChoosingActivity}/>
       <Route path="/" component={MyFooter}/>
       </div>
     </Router>

    );
  }
}



export default App;
