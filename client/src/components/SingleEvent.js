import React from 'react';

const SingleEvent = (props) => {

  return (
    <div>
      <h2>Event name: {props.event.name}</h2>
      <p>Minimum donation required: {props.event.min}</p>
      <p>Description: </p>
      <p>Total raised (ETH): </p>
    </div>
  )
};

export default SingleEvent;
