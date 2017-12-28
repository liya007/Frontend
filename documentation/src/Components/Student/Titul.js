import React, { Component } from 'react';
import Choosingrang from './ChoosingRang';
import './style.css';
import Rang from './Rang';

class Titul extends Component
{
    constructor (props){
        super(props);
        this.newState=this.newState.bind(this);
        this.state={selected : 0}
    }
    newState (){
        this.setState({selected:1})
    }
    render(){
        let component = null;
            if (this.state.selected===1){
                component=<Rang/>
            }
    return(
        <div>
             <div className = "choosing">
        <b>Выберите документ, с которым хотите работать: </b>
        <form>
            <p><input type = "radio" name = "document" value = "frontRages"
                onClick={this.newState}   />Отчет по практике</p>
            <p><input type = "radio" name = "document" value = "reports"
                onClick={this.newState}    />Курсовой проект</p>
            <p><input type = "radio" name = "document" value = "standards"
                onClick={this.newState}    />РГР</p>
            <hr width ="50%" align = "left"/>
        </form>
        
        </div>
        {component};
        </div>
       
    );

}
}
export default Titul;