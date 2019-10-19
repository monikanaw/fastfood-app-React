import React from 'react';
import './Footer.css';
import Logo from '../logo/Logo.js';
import email from '../images/email.png'
import phone from '../images/phone.png'
import pizza from '../images/pizza-slice.png'


const Footer = () => (
  <div className="footer">
     <div className="address">
      <p> Krakowska 56 </p>
      <p> 51-111 Wroclaw </p>
     </div>
     <div className="name">
      <img src={pizza} alt={"pizza"}/>
      <p> Pizza Italia </p>
     </div>
     <div className="contact">
       <div>
         <img src={phone} alt={"phone"}/>
         <p> 111-222-333 </p>
       </div>
       <div>
         <img src={email} alt={"email"}/>
         <p> pizzaitalia@pizza.com </p>
       </div>
     </div>
  </div>
);

export default Footer;
