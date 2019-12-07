import React from 'react';

const SingleEvent = props => {
  return (
    <div>
      {this.props.events.map((event, idx) => {
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
