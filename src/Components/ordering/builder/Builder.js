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
      {props.number && <p className='main-label'> {label} </p>}
      <div className='label'> {props.label} </div>
       <div className='menu-block'>
        {props.image}
        {props.ingredients && <div className='ingredients'> Addition: { props.ingredients }</div>}
        <div className='price'> {props.price}zl </div>
        <button onClick={props.added}> + </button>
        <button onClick={props.removed} disabled={props.disable}> - </button>
       </div>
    </div>
  )
  console.log(label)
}

export default builder;
