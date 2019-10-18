import React, { Component } from 'react';
import './Hour.css';
import { Route, Redirect } from 'react-router-dom';
import Form from '../form/Form.js';

class Hour extends Component {
  state = {
    hour: undefined,
    click: false
  }

  continueClick = () => {
    this.setState({ click: true })
  }


  selectHour = (e) => {
    let newhour = e.target.value;
    console.log(newhour);
    const newState = Object.assign({}, this.state);
    newState.hour = newhour;
    this.setState(newState);
    console.log(this.state.hour)
  }

  renderRedirect = () => {
     if (this.state.click) {
       return <Redirect
        to={{
           pathname: "/form",
           state: {
             date: this.props.day,
             table: this.props.table,
             hour: this.state.hour
           }
        }}
      />
     }
  }


render() {
  return (
   <div className="hour">
      {this.renderRedirect()}
      { this.props.day &&  <div>
        <p> For this date and selected table we have available thise hours. Please select one of them or choose other date. </p>
        <div>
         <button value='5 pm' onClick={(e) => this.selectHour(e)}> 17:00 </button>
         <button value='6 pm' onClick={(e) => this.selectHour(e)}> 18:00 </button>
         <button value='7 pm' onClick={(e) => this.selectHour(e)}> 19:00 </button>
         <button value='8 pm' onClick={(e) => this.selectHour(e)}> 20:00 </button>
        </div>
      { this.state.hour && <div>
        <p> You have chosen: table for {this.props.table} person, date of your visit { this.props.day } at {this.state.hour}</p>
       <button onClick={this.continueClick}> Continue </button>
      </div>
      }
    </div>}
   </div>
  )
 }
}

export default Hour;
