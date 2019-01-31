import React from 'react';
import Event from './Event.jsx';

const EventList = (props) => {
  return (
    <div>
      {props.eventData.map((event, index) => {
        return <Event event={event} key={index} />;
      })}
    </div>
  )
}

export default EventList;
