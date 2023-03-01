import React from 'react'; //import React library

/* Your code goes here */

export function TableHeader(props) {
  return(
    <thead>
      <tr>
        {props.columnNames.map((str) => <th key={str}>{str}</th>)}
      </tr>
    </thead>
  )
}