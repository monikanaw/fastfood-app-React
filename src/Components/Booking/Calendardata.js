import React from 'react';
import Calendar from 'react-calendar'
import './Calendardata.css';

const Calendardata = (props) => {

  let date = new Date();
  let datestring = date.toDateString();
  let previousdate = new Date(new Date().setDate(new Date().getDate() + 15));


  return (
    <div className="calendar">
     <p> 2. Choose date of your visit (please select from available dates) </p>
     <Calendar
       calendarType = "US"
       minDate = {date}
       maxDate = {previousdate}
       value={date}
       onClickDay={(value) => props.onDay(value)}
     />
    </div>
  )

}

export default Calendardata;
