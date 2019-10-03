import React, { Component } from 'react';
import Calendar from 'react-calendar'

var date = new Date();
var three = new Date(new Date().setDate(new Date().getDate() + 40));
console.log(three)


const Booking = () => {
  return(
    <div className="calendar">
     <p>  jjnjsns jkjsdnjs </p>
     <Calendar
       calendarType = "US"
       minDate = {date}
       maxDate = {three}
     />
    </div>
 )
}

export default Booking;
