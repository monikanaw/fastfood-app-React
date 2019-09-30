import React from 'react';
import builders from '../builders/Builders.js';


const builder = (props) => {

  let label = null;

  if(props.type === 'pizza' && props.number === 'first'){
     label = 'Pizza'
  }else if (props.type === 'burger' && props.number === 'first'){
    label = 'Burger'
  }else if (props.type === 'cookie' && props.number === 'first'){
    label = 'Cookies'
  }

  return (
    <div>
      <p> {label} </p>
      <div> {props.label} </div>
      {props.ingredients && <div>Addition: { props.ingredients }</div>}
      <div> Price: {props.price} </div>
      <button onClick={props.added}> + </button>
      <button onClick={props.removed}> - </button>
    </div>
  )
}

export default builder;
