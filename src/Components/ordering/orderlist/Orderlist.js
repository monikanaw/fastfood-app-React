import React, { Component } from 'react';
import Builders from '../builders/Builders.js';
import Aux from '../../../hoc/Aux';


class Orderlist extends Component {

state ={
  pizas: {
    Festiwal: 0,
    Americana: 0,
    Italiana: 0,
    oriental: 0
  },
  totalPrice: 0
}

addProduct = (label) => {
  const oldCount = this.state.pizzas[label];
  const updatedCount = oldCount + 1;
  const updatedProduct = {
    ...this.state.pizzas
  }
  updatedProduct[label] = updatedCount;
}

  render(){
  return (
    <Aux>
      <p> Select your meal </p>
      <Builders />
    </Aux>
  );
 }
}


export default Orderlist;
