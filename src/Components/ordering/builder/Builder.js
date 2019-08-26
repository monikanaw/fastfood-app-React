import React from 'react';
import Builders from '../builders/Builders.js';
import Aux from '../../../hoc/Aux';

const builder = (props) => (
  <div>
    <div> {props.label} </div>
    {props.ingredients && <div>Addition: { props.ingredients }</div>}
    <div> Price: {props.price} </div>
    <button> + </button>
    <button> - </button>
  </div>
);

export default builder;
