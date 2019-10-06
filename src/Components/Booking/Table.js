import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
  state = {
    person: 1
  }

    Onadd = ()  => {
      const newState = Object.assign({}, this.state, {person: 2});
      this.setState(newState);
    }

    Onsubstract = () => {
      const newState = Object.assign({}, this.state);
      newState.person = newState.person - 1;
      this.setState(newState);
    }


  render(){
    return (
      <div className="table">
        <button onClick={this.Onsubstract}> - </button>
         {this.state.person}
        <button onClick={this.Onadd}> + </button>
      </div>
    )
  }
}

export default Table;
