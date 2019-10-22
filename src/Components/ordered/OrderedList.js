import React from 'react';
import './OrderedList.css';

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
           key={item.name }> {item.name} - {item.amount}, </span>})

    return (
      <div className='orderedtable'>
         <p> Your order: </p>
         <p> {totalOrder} </p>
         <p> Total price: {props.price.toFixed(2)}zl</p>
      </div>
    )
  };




export default OrderedList;
