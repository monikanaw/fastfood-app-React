import React, { Component } from 'react';
import './Booking.css';
import Calendardata from './Calendardata.js';
import Hour from './Hour.js';
import Table from './Table.js';


class Booking extends Component {

 state = {
   day: undefined
 }

  onDay = (value) => {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    let day = value.getDate();
    let monthIndex = value.getMonth();
    let year = value.getFullYear();

    let dayselect = day + ' ' + monthNames[monthIndex] + ' ' + year

    const updatedState = {...this.state, day: dayselect}

    this.setState(
      updatedState
    )
  }

  OnNumber = () => {

  }

  render() {
    return(
      <div className= "booking">
        <p className="booking-title"> Choose a day, hour and a table you want to book </p>
        <p className ="booking-subtitle"> (Our calendar is activ only for 15 days in advance) </p>
        <Table
          day={this.state.day}
        />
        <Calendardata
          onDay={this.onDay}
          day={this.state.day}
        />
        <Hour
         day={this.state.day}
        />
      </div>
    )
  }
}

export default Booking;
