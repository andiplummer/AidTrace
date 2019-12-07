import React from 'react';

// test data:
// const events = [{name: 'Fire in California', min: 2, address: '0x000001'}, {name: 'Fire in California', min: 2, address: '0x000001'}]

const SingleEvent = (props) => {

  return (
    <div>
      {props.events.map((event, idx) => {
        return (
          <div key={idx}>
            <h2>{event.name}</h2>
            <p>Minimum donation required: {event.min}</p>
            <p>Total raised (ETH): </p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleEvent;
