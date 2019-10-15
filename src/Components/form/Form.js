import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
   firstName: "",
   lastName: "",
   number: "",
   email: ""
  }

 change = e => {
    this.setState ({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState ({
      firstName: "",
      lastName: "",
      number: "",
      email: ""
    });
  }

  updateNumber = (e) => {
    const val = e.target.value;
    if (e.target.validity.valid) this.setState({number: e.target.value});
    else if (val === '' || val === '-') this.setState({number: val});
  }


  render(){
    return(
      <div className="formm">
        <form>
          <input autoFocus
            name ="firstName" placeholder='First name' value={this.state.firstName} onChange={e => this.change(e)}
          />
          <input
             name ="lastName" placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)}
          />
          <input
             name ="tel" pattern="^-?[0-9]\d*\.?\d*$" type="tel" placeholder='phone number' value={this.state.number} onChange={e => this.updateNumber(e)}
          />
          <input
            name ="email" placeholder='email' value={this.state.email} onChange={e => this.change(e)}
           />
           <button onClick={(e) => this.onSubmit(e)}> Submit </button>
        </form>
      </div>
    )
  }

}



export default Form;
