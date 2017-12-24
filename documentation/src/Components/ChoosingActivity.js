import React, { Component } from 'react';
import {BrowserRouter as Router,Route,  Link} from 'react-router-dom';



const ChoosingActivity = ({match}) =>(
    <div>
        <h1>ChoosingActivity</h1>
        <ul>
            <li><Link to = {`${match.url}/Loading`} className ="Link">
                Go to "Loading"
                </Link>
            </li>
            <li><Link to= {`${match.url}/Editing`} className ="Link">
                Go to "Editing"
                </Link>
            </li>
            <li><Link to= {`${match.url}/Deleting`} className ="Link">
                Go to "Deleting"
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Activity}/>
        <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
    )}/>

    </div>
)

const Activity = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
export default ChoosingActivity;