import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './Header.css';
import Logo from '../logo/Logo.js';
import Orderlist from '../ordering/orderlist/Orderlist.js';
import Bodyimage from '../bodyimage/Bodyimage.js';
import Booking from '../Booking/Booking.js';
import Form from '../form/Form.js';
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
      <Route path="/booking" exact component={Booking}/>
      <Route path="/form" exact component={Form}/>
    </Switch>
   </div>
);

export default header;
