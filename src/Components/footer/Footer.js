import React from 'react';
import './Footer.css';
import Logo from '../logo/Logo.js';

const Footer = () => (
  <div>
     <div>
      <p> Pizza Italia </p>
      <p> Krakowska 56 </p>
      <p> 51-111 Wroclaw </p>
     </div>
     < Logo />
     <div>
       <p> phone: 111-222-333 </p>
       <p> e-mail: pizzaitalia@pizza.com </p>
     </div>
  </div>
);

export default Footer;
