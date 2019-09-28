import React from 'react';



const OrderedList = (props) => (
  <div>
     <p> Your order </p>
     <p>  </p>
     <p> Total price: {props.price.toFixed(2)}zl</p>
  </div>
);

export default OrderedList;
