import React from 'react';
import builders from '../builders/Builders.js';
import './Builder.css';


const builder = (props) => {

  let label = undefined;

  if(props.type === 'pizza' && props.number === 'first'){
     label = 'Pizza'
  }else if (props.type === 'burger' && props.number === 'first'){
    label = 'Burger'
  }else if (props.type === 'cookie' && props.number === 'first'){
    label = 'Cookies'
  }

  return (
    <div className="builder">
      {props.number && <p className='label'> {label} </p>}
      <div> {props.label} </div>
      {props.image}
      {props.ingredients && <div> Addition: { props.ingredients }</div>}
      <div> Price: {props.price} </div>
      <button onClick={props.added}> + </button>
      <button onClick={props.removed} disabled={props.disable}> - </button>
    </div>
  )
  console.log(label)
}

export default builder;
