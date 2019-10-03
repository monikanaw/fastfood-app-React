import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
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
    <Switch>
      <Route path="/" exact component={Bodyimage}/>
      <Route path="/ordering" exact component={Orderlist}/>
    </Switch>
   </div>
);

export default header;
