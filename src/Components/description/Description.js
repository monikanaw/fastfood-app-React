import React from 'react';
import { Link } from 'react-router-dom'
import './Description.css';

const Description = () => {

  return (
    <div className ="description">
      <div className ="description-paragraph">
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p> Hi, welcome to our restaurant. Here you can order some foods directly to you house or you can book a table. </p>
      </div>
      <div className="btn-ord-book">
        <Link to="/ordering" className="btn btn-ordering"> Order some food </Link>
        <Link to="/booking" className="btn btn-booking"> Book a table </Link>
      </div>
    </div>
  )

}



export default Description;
