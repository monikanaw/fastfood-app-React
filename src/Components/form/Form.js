import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  state = {
   inputs: {
     firtsName: "",
     lastName: "",
     number: "",
     email: ""
   },
 };

 change = e => {
   this.setState({
     inputs: {
       ...this.state.inputs,
       [e.target.name]: e.target.value
     },
   });
  };

  OnSubmit = event => {
   event.preventDefault();
    if(this.state.inputs){
      this.setState ({
          firstName: "",
          lastName: "",
          number: "",
          email: ""
        });
        alert("your booking was successful" )
     }
  }

  updateNumber = (e) => {
    const val = e.target.value;
    if (e.target.validity.valid) this.setState({number: e.target.value});
    else if (val === '' || val === '-') this.setState({number: val});
  }

  render(){
    return(
      <div className="formm">
        <form onSubmit={(e) => this.OnSubmit(e)} >
          <input autoFocus
            name ="firstName" required placeholder='First name' value={this.state.firstName}
            onChange={e => this.change(e)}
          />
          <input
             name ="lastName" placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)} required
          />
          <input
             name ="tel" pattern="^-?[0-9]\d*\.?\d*$" type="tel" placeholder='phone number' value={this.state.number} onChange={e => this.updateNumber(e)}
             required
          />
          <input
            name ="email" type="email" placeholder='email' value={this.state.email} onChange={e => this.change(e)} required
           />
           <button> Submit </button>
        </form>
      </div>
    )
  }
}

export default Form;
