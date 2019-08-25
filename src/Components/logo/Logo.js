import React from 'react';
import chipsLogo from '../images/chips-logo.png';
import './Logo.css';

const logo = (props) => (
  <div className="logo">
     <img src={chipsLogo} alt="Logo" />
  </div>
);

export default logo;
