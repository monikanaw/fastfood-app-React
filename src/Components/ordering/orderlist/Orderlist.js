import React, { Component } from 'react';
import Builders from '../builders/Builders.js';
import OrderedList from '../../ordered/OrderedList.js';
import Aux from '../../../hoc/Aux';

const price= {
  Festival: 17.99,
  Americana: 16.99,
  Italiana: 17.99,
  Oriental: 16.99,
  Standard: 19.99,
  America: 22.99,
  New: 21.99,
  Orginal: 20.99,
  Chocolate: 7.99,
  Cookies: 7.99,
  Brownie: 10.99,
  Muffin: 8.99
};

class Orderlist extends Component {
state = {
  pizzas: {
    Festival: 0,
    Americana: 0,
    Italiana: 0,
    Oriental: 0,
    Standard: 0,
    America: 0,
    New: 0,
    Orginal: 0,
    Chocolate: 0,
    Cookies: 0,
    Brownie: 0,
    Muffin: 0

  },
  totalPrice: 0
}

addProduct = (label) => {
  const oldCount = this.state.pizzas[label];
  const updatedCount = oldCount + 1;
  const updatedProduct = {
    ...this.state.pizzas
  };
  updatedProduct[label] = updatedCount;
  const priceOrder = price[label];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice + priceOrder;
  this.setState({pizzas: updatedProduct, totalPrice: newPrice});
}

removeProduct = (label) => {
  const oldCount = this.state.pizzas[label];
  if (oldCount <= 0){
    return;
  }
  const updatedCount = oldCount -1;
  const updatedProduct = {
    ...this.state.pizzas
  }
  updatedProduct[label] = updatedCount;
  const priceOrder = price[label];
  const oldPrice = this.state.totalPrice;
  const newPrice= oldPrice - priceOrder;

   this.setState({ totalPrice: newPrice, pizzas: updatedProduct });
   console.log(this.state)
}

 render(){
  return (
    <Aux>
      <p> Select your meal </p>
      <Builders
        productAdded ={this.addProduct}
        productRemoved ={this.removeProduct}
      />
      <OrderedList
        list= {this.state.pizzas}
        price ={this.state.totalPrice}
       />
    </Aux>
  );
 }
}

export default Orderlist;
