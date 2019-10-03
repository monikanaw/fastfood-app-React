import React, { Component } from 'react';
import Calendar from 'react-calendar'
import './Booking.css';

var date = new Date();
var three = new Date(new Date().setDate(new Date().getDate() + 15));
console.log(three)


const Booking = () => {

  const onDay = (value) => {
    console.log(value)
  }

  return(
    <div className="calendar">
     <p className="calendar-title"> Choose a day, hour and a table you want to book </p>
     <p> (Our calendar is activ only for 15 days in advance) </p>
     <Calendar
       calendarType = "US"
       minDate = {date}
       maxDate = {three}
       value={date}
       onClickDay={(value) => onDay(value)}
     />
    </div>
 )
}

export default Booking;
