import React from 'react';

  const OrderedList = (props) => {
      const productslist = [];

      for( let productName in props.list ) {
        productslist.push(
          {
            name: productName,
            amount: props.list[productName]
          }
        );
      }

     var productsFilter = productslist.filter(e => e.amount )

     const totalOrder = productsFilter.
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
