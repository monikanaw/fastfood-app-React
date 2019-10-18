import React from 'react';
import './Footer.css';
import Logo from '../logo/Logo.js';
import email from '../images/email.png'
import phone from '../images/phone.png'

const Footer = () => (
  <div className="footer">
     <div>
      <p> Pizza Italia </p>
      <p> Krakowska 56 </p>
      <p> 51-111 Wroclaw </p>
     </div>
     < Logo />
     <div>
       <img src={phone} alt={"phone"}/>
       <p> phone: 111-222-333 </p>
       <img src={email} alt={"email"}/>
       <p> e-mail: pizzaitalia@pizza.com </p>
     </div>
  </div>
);

export default Footer;
