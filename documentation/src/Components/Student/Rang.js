
import React, { Component } from 'react';

class Rang extends Component{
    constructor (props){
        super(props);
        this.newState=this.newState.bind(this); //// ЧТО ЭТО ТАКОЕ И ПОЧЕМУ ОНО ТАК ДЕЛАЕТСЯ
        this.state={selected : 0}
    }
    newState (){
        this.setState({selected:1})
    }
    render(){
        let component = null;
        if (this.state.selected==1){
            component=<div><button>Заполнить</button> <button>Предварительный просмотр</button></div>
        }
        if (this.state.selected==1)//здесь доп условие для отчетов
         {component=<div><button>Сохранить</button> <button>Предварительный просмотр</button></div>}
        return(
            <div>
<b>Выберите курс: </b>
<form>
    <p><input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>1
        <input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>2
    </p>
    <p><input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>3
    <input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>4</p>
    <p><input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>5
    <input type = "radio" name = "document2" value = "frontRages" onClick={this.newState}/>6</p>
    <hr width ="50%" align = "left"/>

</form>
{component};
</div>
        );}
}
export default Rang;