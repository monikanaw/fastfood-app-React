import React from 'react';
import Builder from '../builder/Builder.js'
import Aux from '../../../hoc/Aux';

const pizzas = [
  {label: 'Festival', ingredients: 'tomato sauce, cheese, tomato, bazil', price: '17,99'},
  {label: 'Americana', ingredients: 'tomato sauce, cheese, pastrami, bacon', price: '16,99'},
  {label: 'Italiana', ingredients: 'tomato sauce, cheese, fior di latte, bazil, garlic', price: '17,99'},
  {label: 'Oriental', ingredients: 'tomato sauce, cheese, chorizo, parsley, onion', price: '16,99'},
]

const burgers = [
  {label: 'Standard', ingredients: 'beef chop, cheese, tomato, cucumber, onion, bbqsauce', price: '19,99'},
  {label: 'America', ingredients: 'beef chop, cheese, lettuce, bacon, bbq sauce, garlic sauce', price: '22,99'},
  {label: 'New', ingredients: 'cheese, fior di latte, tomato, lettuce, chicken chop,garlic sauce, mayonnaise', price: '21,99'},
  {label: 'Orginal', ingredients: 'beef chop, cheese, chorizo, onion, mustard, tomato, garlic', price: '20,99'},
]

const cookies = [
  {label: 'Chocolate', price: '7,99'},
  {label: 'Cookies', price: '7,99'},
  {label: 'Brownie', price: '10,99'},
  {label: 'Muffin', price: '8,99'},
]

const builders = (props) => (
  <Aux>
    <div>
     <p> Pizza </p>
      {pizzas.map(pizza => (
        <Builder key={pizza.label} label={pizza.label} ingredients={pizza.ingredients} price={pizza.price}
        added = {() => props.productAdded(pizza.label)}
        removed = {() => props.productRemoved(pizza.label)}/>
      ))}
    </div>
    <div>
     <p> Burger </p>
      {burgers.map(burger => (
        <Builder key={burger.label} label={burger.label} ingredients={burger.ingredients} price={burger.price}
        added = {() => props.productAdded(burger.label)}
        removed = {() => props.productRemoved(burger.label)}/>
      ))}
    </div>
    <div>
     <p> Cookies </p>
      {cookies.map(cookies => (
        <Builder key={cookies.label} label={cookies.label} price={cookies.price}
        added = {() => props.productAdded(cookies.label)}
        removed = {() => props.productRemoved(cookies.label)}/>
      ))}
    </div>
  </Aux>
);


export default builders;
