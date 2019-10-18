import React, { Component } from 'react';
import './Table.css';
import Calendardata from './Calendardata.js';


class Table extends Component {
  state = {
    person: 1,
  }

    Onadd = ()  => {
      if (this.state.person >= 8){
        return;
      }
      const newState = Object.assign({}, this.state);
      newState.person = newState.person + 1;
      this.setState(newState);
    }

    Onsubstract = () => {
      if (this.state.person <= 1){
        return;
      }
      const newState = Object.assign({}, this.state);
      newState.person = newState.person - 1;
      this.setState(newState);
    }

  render(){
      let disableadd = undefined;
      let disablesubstract = undefined;
      let text = undefined;

      if( this.state.person === 1){
        disablesubstract = true
      }else if (this.state.person === 8){
        disableadd = true;
        text = "We have tables for max 8 people"
      }

    return (
      <div className="table">
        <div className="table-paragraph"> 1. Pick the number of people for whom you want to reserve a table
        <p className="max-table"> {text} </p>
        </div>
        <div className="table-buttons">
          <button className= "button" onClick={this.Onsubstract} disabled={disablesubstract}> - </button>
           {this.state.person}
          <button className= "button" onClick={this.Onadd} disabled={disableadd}> + </button>
        </div>
        <Calendardata
          onDay={this.props.onDay}
          day={this.props.day}
          table={this.state.person}
        />
      </div>
    )
  }
}

export default Table;
