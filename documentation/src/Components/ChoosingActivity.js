import React, { Component } from 'react';
import {BrowserRouter as Router,Route,  Link} from 'react-router-dom';



/*const ChoosingActivity = ({match}) =>(
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
)*/

export default class  ChoosingActivity extends React.Component{
    constructor (props){
        super (props);
        this.state ={
            stateOfRadiobutton : false
        };
    }

    render(){

            if(this.state.value==='load')
            {
                
                if(this.state.value==='edit')
                {
                    
                }
                else
                {

                }
            }
        return(
            <form>
            <p><b>Выберете действие: </b></p>
            <p><input  name = "choosing" type = "radio" value = "load" /></p>
            <p><input  name = "choosing" type = "radio" value = "edit"/>Редактироват существующий документ</p>
            <p><input  name = "choosing" type = "radio" value = "delete"/>Удалить существующий документ</p>
        </form>
        );
    }

}
    



const Activity = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
