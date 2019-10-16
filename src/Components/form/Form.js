import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  state = {
   firstName: "",
   lastName: "",
   number: "",
   email: "",
   emailIsValid: false
  }

 change = e => {
    this.setState ({
      [e.target.name]: e.target.value
    });
    console.log(this.state.email)
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.firstName && this.state.lastName && this.state.number && this.state.email){
      this.setState ({
        firstName: "",
        lastName: "",
        number: "",
        email: ""
      });
    }
    console.log(this.state)
  }

  updateNumber = (e) => {
    const val = e.target.value;
    if (e.target.validity.valid) this.setState({number: e.target.value});
    else if (val === '' || val === '-') this.setState({number: val});
  }

  isValidEmailAddress = (address) => {
      if(address.match(/.+@.+/)){
        const newState = Object.assign({}, this.state);
        const k = newState.emailIsValid = true;
        this.setState({
          emailIsValid: k
        })
      }else {
        const newState = Object.assign({}, this.state);
        const k = newState.emailIsValid = false;
        this.setState({
          emailIsValid: k
        })
      }
        console.log(this.state.emailIsValid)
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
            name ="email" type="email" placeholder='email' value={this.state.email} onChange={e => this.change(e)}
            onBlur={() => this.isValidEmailAddress(this.state.email)}
           />
           <button onClick={(e) => this.onSubmit(e)}> Submit </button>
        </form>
      </div>
    )
  }

}



export default Form;
