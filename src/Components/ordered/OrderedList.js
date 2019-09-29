import React from 'react';

  const OrderedList = (props) => {
      const pizzalist = [];

      for( let pizzaName in props.list ) {
        pizzalist.push(
          {
            name: pizzaName,
            amount: props.list[pizzaName]
          }
        );
      }

      const m = pizzalist.
      map(ig =>
        {return <span
            key={ig.name }> {ig.name} ({ig.amount}) </span>})


    return (
      <div>
         <p> Your order: </p>
         <p> {m} </p>
         <p> Total price: {props.price.toFixed(2)}zl</p>
      </div>
    )
  };




export default OrderedList;
