import React, { Component } from 'react';
import './Booking.css';
import Calendardata from './Calendardata.js';


class Booking extends Component {

 state = {
   day: undefined
 }

  onDay = (value) => {
    let day2 = value.toDateString()
    this.setState({
      day: day2
    })
  }

  render() {
      return(
        <Calendardata onDay={this.onDay} day={this.state.day}/>
     )
  }
}

export default Booking;
