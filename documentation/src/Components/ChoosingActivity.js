import React, { Component } from 'react';
import {BrowserRouter as Router,Route,  Link} from 'react-router-dom';
import './Choosing.css';
import ModalLoading from './ModalLoading';



export default class  ChoosingActivity extends React.Component{
    constructor (props){
        super (props);
        this.ChoosenL = this.ChoosenL.bind(this);
        this.ChoosenE = this.ChoosenE.bind(this);
        this.ChoosenD = this.ChoosenD.bind(this);
           
        this.state ={radioButton: 'nothing'}
    }

    ChoosenL (){
        this.setState({radioButton: 'L'});
    }

    ChoosenE (){
        this.setState({radioButton: 'E'});
    }

    ChoosenD (){
        this.setState({radioButton: 'D'});
    }



    render(){

        let p = null;
        if (this.state.radioButton == 'L'){
            p = <ModalLoading/>
        }
        else {
            if (this.state.radioButton == 'E')
            {
                p = <p>the state is "Editing"</p>
            }
            else {
                if (this.state.radioButton == 'D')
                {
                    p = <p>the state is "Deleting"</p>
                }
                else{
                    p = <p>the state is "Bullshit"</p>
                }
            }
      }

        return(
          <div>
              <hr />
                <div className = "choosing">
                    <b>Выберите действие: </b>
                    <form>
                        <p><input type = "radio" name = "activity"  value = "Loading"
                            onClick ={this.ChoosenL}/>Добавить</p>
                        <p><input type = "radio" name = "activity" value = "Editing"
                            onClick ={this.ChoosenE}/>Редактировать</p>
                        <p><input type = "radio" name = "activity" value = "Deliting"
                            onClick ={this.ChoosenD}/>Удалить</p>
                    </form>
                   
                </div>
                {p} {/*подгружаемая компонента*/}
          </div>
         
          
         
        );

        
    }

}



