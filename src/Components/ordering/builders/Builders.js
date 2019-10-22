import React from 'react';
import Builder from '../builder/Builder.js'
import Aux from '../../../hoc/Aux';
import { festival, americana, italiana, oriental, standard, america, newy, orginal,chocolate, cookie, brownie, muffin } from './images.js';


  const items = [
    {number:'first', type:'pizza', label: 'Festival', ingredients: 'tomato sauce, cheese, tomato, bazil', price: '17,99', images: <img src={festival} />},
    {type:'pizza', label: 'Americana', ingredients: 'tomato sauce, cheese, pastrami, bacon', price: '16,99', images: <img src={americana} />},
    {type:'pizza', label: 'Italiana', ingredients: 'tomato sauce, cheese, fior di latte, bazil, garlic', price: '17,99', images: <img src={italiana} />},
    {type:'pizza', label: 'Oriental', ingredients: 'tomato sauce, cheese, chorizo, parsley, onion', price: '16,99', images: <img src={oriental} />},
    {number:'first', type:'burger', label: 'Standard', ingredients: 'beef chop, cheese, tomato, cucumber, onion, bbqsauce', price: '19,99', images: <img src={standard} />},
    {type:'burger', label: 'America', ingredients: 'beef chop, cheese, lettuce, bacon, bbq sauce, garlic sauce', price: '22,99', images: <img src={america} />},
    {type:'burger', label: 'New', ingredients: 'cheese, fior di latte, tomato, lettuce, chicken chop,garlic sauce, mayonnaise', price: '21,99', images: <img src={newy} />},
    {type:'burger', label: 'Orginal', ingredients: 'beef chop, cheese, chorizo, onion, mustard, tomato, garlic', price: '20,99', images: <img src={orginal} />},
    {number:'first', type:'cookie', label: 'Chocolate', price: '7,99', images: <img src={chocolate} />},
    {type:'cookie', label: 'Cookie', price: '7,99', images: <img src={cookie} />},
    {type:'cookie', label: 'Brownie', price: '10,99', images: <img src={brownie} />},
    {type:'cookie', label: 'Muffin', price: '8,99', images: <img src={muffin} />}
  ]

  const builders = (props) => (
    <Aux>
      <div>
        {items.map(item => (
          <Builder key={item.label} number={item.number} type={item.type} label={item.label} ingredients={item.ingredients} price={item.price} image ={item.images}
          added = {() => props.productAdded(item.label)}
          removed = {() => props.productRemoved(item.label)}
          disable={props.disable[item.label]}/>
        ))}
      </div>
    </Aux>
  );

export default builders;
