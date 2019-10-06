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
    return (
      <div>
      <p className="table-paragraph"> Pick the number of people for whom you want to reserve a table </p>
        <div className="table">
          <button onClick={this.Onsubstract}> - </button>
           {this.state.person}
          <button onClick={this.Onadd}> + </button>
        </div>
      </div>
    )
  }
}

export default Table;
