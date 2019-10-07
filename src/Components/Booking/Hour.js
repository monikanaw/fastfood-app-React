import React, { Component } from 'react';
import './Hour.css';


class Hour extends Component {

  state = {
    hour: undefined
  }

  selectChannel = (e) => {
    let newhour = e.target.value;
    console.log(newhour);
    const newState = Object.assign({}, this.state);
    newState.hour = newhour;
    this.setState(newState);
    console.log(this.state.hour)
  }

render() {
  return (
   <div className="hour">
      { this.props.day &&  <div>
        <p> For this date and selected table we have available thise hours. Please select one of them or choose other date. </p>
        <div>
         <button value='5 pm' onClick={(e) => this.selectChannel(e)}> 17:00 </button>
         <button value='6 pm' onClick={(e) => this.selectChannel(e)}> 18:00 </button>
         <button value='7 pm' onClick={(e) => this.selectChannel(e)}> 19:00 </button>
         <button value='8 pm' onClick={(e) => this.selectChannel(e)}> 20:00 </button>
        </div>
      { this.state.hour && <p> You have chosen: table for {this.props.table} person, date of your visit { this.props.day } at {this.state.hour}</p>} 
    </div>}
   </div>
  )
 }
}

export default Hour;
