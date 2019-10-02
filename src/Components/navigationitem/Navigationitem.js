import React from 'react';
import { Route, Link } from 'react-router-dom'
import './Navigationitem.css';

const navigationitem = () => (
  <div className='navigation-link'>
    <li><Link to="/"> Home </Link></li>
    <li><Link to ={{
      pathname: '/ordering'
    }}> Order </Link></li>
    <li><Link to ={{
      pathname: '/booking'
    }}> Book a table </Link></li>
  </div>
);

export default navigationitem;
