import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css';
import Title from './Components/title/Title.js';
import Header from './Components/header/Header.js';
import Bodyimage from './Components/bodyimage/Bodyimage.js';
import Orderlist from './Components/ordering/orderlist/Orderlist.js';



class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div>
       <Header />
      </div>
    </BrowserRouter>
  );
 }
}

export default App;
