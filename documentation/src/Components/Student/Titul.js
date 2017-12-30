import React, { Component } from 'react';
import './style.css';
import Rang from './Rang';
import Radio from './Radio';
import Nowdoc from './Nowdoc';

class Titul extends Component
{
    constructor (props){
        super(props);
    }
    render(){
        console.log("+");
        let component2 = null;
        let component = null;
        let com = null;
        const mas = ['Отчет по практике', 'Курсовой проект', 'РГР'];
        const mas2 = ['Титульные листы', 'Структуры отчетов и пояснительных записок', 'ГОСТы'];

        if (this.props.match.path=='/choosing') // для преподов
            com=<Radio url = {this.props.match.path} mas = {mas2} />
        if (this.props.match.path=='/titul'||this.props.match.path=='/otchet'||this.props.match.path=='gost') // для студ
            com=<Radio url = {this.props.match.path} mas = {mas} /> 
    return(
        <div>
            <div className = "choosing">
            <b>Выберите документ, с которым хотите работать: </b>
           
            </div>
            {com}
        </div> 
    );
}
}
export default Titul;