
import React, { Component } from 'react';
import './style.css';
import {Button} from 'semantic-ui-react';

class Rang extends Component{
    constructor (props){
        super(props);
        this.newState=this.newState.bind(this); //// ЧТО ЭТО ТАКОЕ И ПОЧЕМУ ОНО ТАК ДЕЛАЕТСЯ
        this.state={selected : 0}
        this.state = {url : this.props.url}
    }
    newState (){
        this.setState({selected:1})
    }
    render(){
        let component = null;
        if (this.state.selected===1&&this.state.url==='/otchet')
            component =<div><Button>Сохранить</Button><Button>Предварительный просмотр</Button></div>
        if (this.state.selected===1&&this.state.url==='/titul')
            component =<div><Button>Заполнить</Button><Button>Предварительный просмотр</Button></div>
        return(
           <div >
               <div>
           <b>Выберите курс: </b>
            <form>
                <p><input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>1
                <input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>2</p>
                <p><input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>3
                <input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>4</p>
                <p><input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>5
                <input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>6</p>
                <hr width ="50%" align = "left"/>
            </form>
           </div>
            {component}
            </div>
        );}
}
export default Rang;