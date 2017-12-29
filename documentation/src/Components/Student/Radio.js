import React, { Component } from 'react';
import './style.css';

function Radio (props){

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
}
export default Radio;