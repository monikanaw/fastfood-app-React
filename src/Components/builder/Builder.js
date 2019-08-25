import React from 'react';
import Builders from '../builders/Builders.js';
import Aux from '../../hoc/Aux';

const builder = (props) => (
  <div>
    <div> {props.label} </div>
    <button> + </button>
    <button> - </button>
  </div>
);

export default builder;
