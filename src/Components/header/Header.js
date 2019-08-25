import React from 'react';
import './Header.css';
import Logo from '../logo/Logo.js';
import Navigationmenu from '../navigationmenu/Navigationmenu.js'

const header = () => (
  <header className="header">
    <Logo />
    <Navigationmenu />
  </header>
);

export default header;
