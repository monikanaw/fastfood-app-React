import React from 'react';
import builders from '../builders/Builders.js';


const builder = (props) => {

  let label = null;

  if(props.type === 'pizza'){
     label = 'Pizza'
  }else if (props.type === 'burger'){
    label = 'Burger'
  }else{
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
