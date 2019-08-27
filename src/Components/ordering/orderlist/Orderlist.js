import React, { Component } from 'react';
import Builders from '../builders/Builders.js';
import Aux from '../../../hoc/Aux';

const price= {
  Festival: 17.99,
  America: 16.99,
  Italiana: 17.99,
  Oriental: 16.99
};

class Orderlist extends Component {
state ={
  pizzas: {
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
  const priceOrder = price[label];
  const oldPrice = this.state.totalPrice;
  const newPrice= oldPrice + priceOrder;
  this.setState({totalPrice: newPrice, pizzas: updatedProduct});
}

  render(){
  return (
    <Aux>
      <p> Select your meal </p>
      <Builders productAdded ={this.addProduct}/>
    </Aux>
  );
 }
}


export default Orderlist;
