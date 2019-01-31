import React from 'react';
import Event from './Event.jsx';

const EventList = (props) => {
  let events = props.eventData;
  events.map((event, index) => {
    return (
      <Event event={event} key={index} />
    )
  });
}

export default EventList;
