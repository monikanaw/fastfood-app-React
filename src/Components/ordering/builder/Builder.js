import React from 'react';
import builders from '../builders/Builders.js';

const builder = (props) => (
  <div>
    <div> {props.label} </div>
    {props.ingredients && <div>Addition: { props.ingredients }</div>}
    <div> Price: {props.price} </div>
    <button onClick={props.added}> + </button>
    <button onClick={props.removed}> - </button>
  </div>
);

export default builder;
