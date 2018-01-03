import React, { Component } from 'react';
import Rang from './Rang';
import './style.css';
import ChoosingActivity from '../ChoosingActivity';
import AllDocuments from '../AllDocuments';

class Radio extends Component {

    constructor (props){
        super(props);
        this.newState=this.newState.bind(this);
        this.newState2=this.newState2.bind(this);
        this.state={selected : 0};
        this.state = {url : this.props.url};
        const items = this.props.mas;
    }
    newState (){
        this.setState({selected:1})
    }
    newState2 (){
        this.setState({selected:2})
    }
    render(){
        let component2 = null;
        let component = null;
        if (this.state.selected===1 && this.state.url!='/choosing'){// выбор курса
            component2=<Rang url = {this.state.url}/>
        }
        if (this.state.url==='/choosing'){
            component = (
                <div className = "choosing">
                <b>Или, быть может, Вы хотели бы: </b>
                <p><input type = "radio" name = "document" value = "allDocuments"onClick={this.newState2}/>
                Показать все текущие документы</p>
                </div>)
        }
        if (this.state.selected===1&&this.state.url==='/choosing'){
            component = (
                <div>
                <b>Или, быть может, Вы хотели бы: </b>
                <p><input type = "radio" name = "document" value = "allDocuments"
                onClick={this.newState2}    />
                Показать все текущие документы</p>
                <ChoosingActivity/>
                </div>
           )    
        }
        if(this.state.selected===2)
        {
            component = <div className = "choosing" ><hr/>
            <AllDocuments/>
            </div>
        }

    return(
        <div className = "choosing">
            <p><input type = "radio" name = "document" value = "frontRages"
                onClick={this.newState}   />{this.props.mas[0]}</p>
            <p><input type = "radio" name = "document" value = "reports"
                onClick={this.newState}    />{this.props.mas[1]}</p>
            <p><input type = "radio" name = "document" value = "standards"
                onClick={this.newState}    />{this.props.mas[2]}</p>
            {component }
            {component2}
        </div>
       
        );
    }
}
export default Radio;