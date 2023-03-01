import React from 'react'; //import React library

//example senator data objects:
// { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
// { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }

/* Your code goes here */

export function SenatorRow(props) {
  return(
    <tr key={props.senatorData.id}>
      <td>{props.senatorData.name}</td>
      <td>{props.senatorData.party.charAt(0)} - {props.senatorData.state}</td>
      <td><a href={'tel:' + props.senatorData.phone}>{props.senatorData.phone}</a></td>
      <td><a href={'https://twitter.com/' + props.senatorData.twitter}>@{props.senatorData.twitter}</a></td>
    </tr>
  )
}