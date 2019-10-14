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
    console.log(this.state);
  }

  render(){
    return(
      <div className="formm">
        <form>
          <input
            name ="firstName" placeholder='First name' value={this.state.firstName} onChange={e => this.change(e)}
          />
          <input
             name ="lastName" placeholder='Last name' value={this.state.lastName} onChange={e => this.change(e)}
          />
          <input
             name ="number" placeholder='number' value={this.state.number} onChange={e => this.change(e)}
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
