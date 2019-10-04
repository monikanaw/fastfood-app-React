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

    this.setState({
      day: dayselect
    })
  }

  render() {
    return(
      <div>
        <Calendardata
          onDay={this.onDay}
          day={this.state.day}
        />
        <Table
          day={this.state.day}
        />
        <Hour />
      </div>
    )
  }
}

export default Booking;
