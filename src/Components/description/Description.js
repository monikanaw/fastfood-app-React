import React from 'react';
import { Link } from 'react-router-dom'
import './Description.css';

const Description = () => {

  var ordering =
        <Link to={'/ordering'}>
         <button className = "button-desc"> Order a food </button>
        </Link>

  var booking =
        <Link to={'/booking'}>
         <button className = "button-desc"> Book a table </button>
        </Link>

  return(
    <div className ="description">
      <p> Hi, welcome to our restaurant. Here you can order samo foods directly to you house or you can book a table </p>
      {ordering}
      {booking}
    </div>
  )

}



export default Description;
