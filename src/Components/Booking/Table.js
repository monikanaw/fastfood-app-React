import React from 'react';
import './Table.css';

const Table = (props) => {

  let table1 = undefined
  let table2 = undefined
  let table3 = undefined

   if(props.day){
     console.log(props)
      table1 = <button> for one people </button>
      table2 = <button> for one people </button>
      table3 = <button> for family (4- 6 people) </button>
   }

  return (
    <div className="table">
      {table1}
      {table2}
      {table3}
    </div>
  )
}

export default Table;
