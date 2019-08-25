import React from 'react';
import Builder from '../builder/Builder.js'

const pizzas = [
  {label: 'Festival', ingredients: 'tomato sauce, cheese, tomato, bazil'},
  {label: 'America', ingredients: 'tomato sauce, cheese, pastrami, bacon'},
  {label: 'Italiana', ingredients: 'tomato sauce, cheese, fior di latte, bazil, garlic'},
  {label: 'Oriental', ingredients: 'tomato sauce, cheese, chorizo, parsley, onion'},
]

const burgers = [
  {label: 'Standard', ingredients: 'beef chop, cheese, tomato, cucumber, onion, bbqsauce'},
  {label: 'Americna', ingredients: 'beef chop, cheese, lettuce, bacon, bbq sauce, garlic sauce'},
  {label: 'New', ingredients: 'cheese, fior di latte, tomato, lettuce, chicken chop,garlic sauce, mayonnaise'},
  {label: 'Orginal', ingredients: 'beef chop, cheese, chorizo, onion, mustard, tomato, garlic'},
]

const cookies = [
  {label: 'Chocolate'},
  {label: 'Standard'},
  {label: 'Brownie'},
  {label: 'Muffin'},
]


const builders = (props) => (
  <div>
   <p> pizza </p>
    {pizzas.map(pizza => (
      <Builder key={pizza.label} label={pizza.label} ingredients={pizza.ingredients}/>
    ))}
  </div>
);


export default builders;
