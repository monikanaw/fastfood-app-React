import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Title from './Components/title/Title.js';
import Header from './Components/header/Header.js';
import Footer from './Components/footer/Footer.js';
import Bodyimage from './Components/bodyimage/Bodyimage.js';
import Orderlist from './Components/ordering/orderlist/Orderlist.js';



class App extends Component {
  render(){
  return (
      <div>
       <Header />
       <Footer />
      </div>
  );
 }
}

export default App;
