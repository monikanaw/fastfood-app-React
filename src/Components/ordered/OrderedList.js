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

     var pizzaFilter = pizzalist.filter(e => e.amount )

     const totalOrder = pizzaFilter.
     map(item =>
       {return <span
           key={item.name }> {item.name} ({item.amount}) </span>})

    return (
      <div>
         <p> Your order: </p>
         <p> {totalOrder} </p>
         <p> Total price: {props.price.toFixed(2)}zl</p>
      </div>
    )
  };




export default OrderedList;
