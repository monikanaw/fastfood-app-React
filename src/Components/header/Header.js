import React from 'react';
import { Route, Link } from 'react-router-dom'
import './Header.css';
import Logo from '../logo/Logo.js';
import Orderlist from '../ordering/orderlist/Orderlist.js';
import Bodyimage from '../bodyimage/Bodyimage.js';
import Navigationmenu from '../navigationmenu/Navigationmenu.js'


const header = () => (
  <div>
    <header className="header">
      <Logo />
      <Navigationmenu />
    </header>
    <Route path="/" exact component={Bodyimage}/>
    <Route path="/ordering" exact component={Orderlist}/>
   </div>
);

export default header;
