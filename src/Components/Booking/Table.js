import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  state = {
    person: 1
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

      if( this.state.person == 1){
        disablesubstract = true
      }else if (this.state.person == 8){
        disableadd = true
      }

    return (
      <div className="table">
        <p className="table-paragraph"> 1. Pick the number of people for whom you want to reserve a table </p>
        <div className="table-buttons">
          <button className= "button" onClick={this.Onsubstract} disabled={disablesubstract}> - </button>
           {this.state.person}
          <button className= "button" onClick={this.Onadd} disabled={disableadd}> + </button>
        </div>
      </div>
    )
  }
}

export default Table;
