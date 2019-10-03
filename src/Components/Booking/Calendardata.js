import React from 'react';
import Calendar from 'react-calendar'

const Calendardata = (props) => {
  let date = new Date();
  let datestring = date.toDateString();
  let previousdate = new Date(new Date().setDate(new Date().getDate() + 15));

  return (
    <div className="calendar">
     <p className="calendar-title"> Choose a day, hour and a table you want to book </p>
     <p> (Our calendar is activ only for 15 days in advance) </p>
     <Calendar
       calendarType = "US"
       minDate = {date}
       maxDate = {previousdate}
       value={date}
       onClickDay={(value) => props.onDay(value)}
     />
       { props.day && <p>You have chosen: { props.day }</p>}
    </div>
  )

}



export default Calendardata;
