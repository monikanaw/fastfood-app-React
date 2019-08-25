import React, { Component } from 'react';
import './App.css';
import Title from './Components/title/Title.js';
import Header from './Components/header/Header.js';
import Bodyimage from './Components/bodyimage/Bodyimage.js';
import Builders from './Components/builders/Builders.js';

class App extends Component {
  render(){
  return (
    <div>
     <Header />
     <Bodyimage />
     <Builders />
    </div>
  );
 }
}

export default App;