import React, { Component } from 'react';

import MyHeader from './MyHeader';
import MainPage from './mainPage';
import ChoosingActivity from './ChoosingActivity';


import '../App.css';

class Home extends React.Component{
    render (){
        return(
            <div className="App">
            <MainPage b1  = "Титульные листы" b2  = "Структуры отчетов и пояснительных записок" b3  = "ГОСТы" />
          </div>
        );
    }

}

export default Home;
