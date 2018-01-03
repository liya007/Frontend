import React, { Component } from 'react';
import './Choosing.css';
import ModalLoading from './ModalLoading';
import ModalEditing from './ModalEditing';
import ModalDeleting from './ModalDeleting';



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
        if (this.state.radioButton === 'L'){
            p = <ModalLoading/>
        }
        else {
            if (this.state.radioButton === 'E')
            {
                p = <ModalEditing/>
            }
            else {
                if (this.state.radioButton === 'D')
                {
                    p = <ModalDeleting/>
                }
                else{
                    p = <p>the state is "nothing"</p>
                }
            }
      }
        return(
          <div>
                    <b>Выберите действие: </b>
                    <form>
                        <p><input type = "radio" name = "activity"  value = "Loading"
                            onClick ={this.ChoosenL}/>Добавить</p>
                        <p><input type = "radio" name = "activity" value = "Editing"
                            onClick ={this.ChoosenE}/>Заменить</p>
                        <p><input type = "radio" name = "activity" value = "Deliting"
                            onClick ={this.ChoosenD}/>Удалить</p>
                            <hr width ="50%" align = "left"/>
                    </form>
                {p} {/*подгружаемая компонента*/}
          </div>
        );   
    }
}