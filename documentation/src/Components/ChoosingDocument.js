import React, { Component } from 'react';
import {BrowserRouter as Router,Route,  Link} from 'react-router-dom';
import ChoosingActivity from './ChoosingActivity';
import './Choosing.css';

 export default class ChoosingDocument extends React.Component
 {

    constructor (props){
        super(props);
        this.newState=this.newState.bind(this); //// ЧТО ЭТО ТАКОЕ И ПОЧЕМУ ОНО ТАК ДЕЛАЕТСЯ
        this.newState2=this.newState2.bind(this); //// ЧТО ЭТО ТАКОЕ И ПОЧЕМУ ОНО ТАК ДЕЛАЕТСЯ
        this.state={selected : 0}
    }

    newState (){
        this.setState({selected:1})
    }

    newState2 (){
        this.setState({selected:2})
    }
    

     render (){

        let component = null;

        if (this.state.selected===1){
            component=<ChoosingActivity/>
        }
        else{
            if (this.state.selected===2)
            {
                component= 
                <div>
                    <hr/>
                    <p>ЗДЕСЬ ПОТОМ БУДЕТ КОМПОНЕНТА ДЛЯ ВЫВОДА ВСЕХ ИМЕЮЩИХСЯ ДОКУМЕНТОВ</p>
                </div>
                
            }
        }
        /*this.state.selected ? component = <ChoosingActivity/> : component=null;*/
     

         return(
             <div>
                  <div className = "choosing">
                    <b>Выберите документ, с которым хотите работать: </b>
                    <form>
                        <p><input type = "radio" name = "document" value = "frontRages"
                        onClick={this.newState}   />Титульные листы</p>
                        <p><input type = "radio" name = "document" value = "reports"
                        onClick={this.newState}    />Структуры отчетов и пояснительных записок</p>
                        <p><input type = "radio" name = "document" value = "standards"
                        onClick={this.newState}    />ГОСТы</p>
                        <hr width ="50%" align = "left"/>
                    <b>Или, быть может, Вы хотели бы: </b>
                        <p><input type = "radio" name = "document" value = "allDocuments"
                            onClick={this.newState2}    />Показать все текущие документы</p>   
                    </form>
            </div>
            {component}{/*подгружаемая компонента*/}
             </div>
           
         );
     }
 }