import React from 'react';
import './Hour.css';

const Hour = (props) => {

   let hour = undefined;

   if(props.day){
      hour =
        <div>
         <button> 17:00 </button>
         <button> 18:00 </button>
         <button> 19:00</button>
         <button> 20:00</button>
        </div>
   }


  return (
   <div className="hour">
      { props.day && <p> For this date and selected table we have available thise hours. Please select one of them or choose other date. </p>}
      {hour}
      { props.day && <p>You have chosen: { props.day }</p>}
   </div>
  )
}

export default Hour;
