import React from 'react';
import Builder from '../builder/Builder.js'
import Aux from '../../../hoc/Aux';


  const items = [
    {number:'first', type:'pizza', label: 'Festival', ingredients: 'tomato sauce, cheese, tomato, bazil', price: '17,99'},
    {type:'pizza', label: 'Americana', ingredients: 'tomato sauce, cheese, pastrami, bacon', price: '16,99'},
    {type:'pizza', label: 'Italiana', ingredients: 'tomato sauce, cheese, fior di latte, bazil, garlic', price: '17,99'},
    {type:'pizza', label: 'Oriental', ingredients: 'tomato sauce, cheese, chorizo, parsley, onion', price: '16,99'},
    {number:'first', type:'burger', label: 'Standard', ingredients: 'beef chop, cheese, tomato, cucumber, onion, bbqsauce', price: '19,99'},
    {type:'burger', label: 'America', ingredients: 'beef chop, cheese, lettuce, bacon, bbq sauce, garlic sauce', price: '22,99'},
    {type:'burger', label: 'New', ingredients: 'cheese, fior di latte, tomato, lettuce, chicken chop,garlic sauce, mayonnaise', price: '21,99'},
    {type:'burger', label: 'Orginal', ingredients: 'beef chop, cheese, chorizo, onion, mustard, tomato, garlic', price: '20,99'},
    {number:'first', type:'cookie', label: 'Chocolate', price: '7,99'},
    {type:'cookie', label: 'Cookies', price: '7,99'},
    {type:'cookie', label: 'Brownie', price: '10,99'},
    {type:'cookie', label: 'Muffin', price: '8,99'},
  ]

  const builders = (props) => (
    <Aux>
      <div>
        {items.map(item => (
          <Builder key={item.label} number={item.number} type={item.type} label={item.label} ingredients={item.ingredients} price={item.price}
          added = {() => props.productAdded(item.label)}
          removed = {() => props.productRemoved(item.label)}/>
        ))}
      </div>
    </Aux>
  );

export default builders;
