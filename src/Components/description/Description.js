import React from 'react';
import { Link } from 'react-router-dom'
import './Description.css';

const Description = () => {

  return (
    <div className ="description">
      <p> Hi, welcome to our restaurant. Here you can order samo foods directly to you house or you can book a table </p>
      <div className="btn-ord-book">
        <Link to="/ordering" className="btn btn-ordering"> Order some food </Link>
        <Link to="/booking" className="btn btn-booking"> Book a table </Link>
      </div>
    </div>
  )

}



export default Description;
