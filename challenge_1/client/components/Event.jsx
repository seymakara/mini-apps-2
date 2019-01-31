import React from 'react';

const Event = (props) => {
  let { category2, date, description } = props.event;
  return (
    <div className='eventItem'>
      <div>
        <h3>Category</h3>
        <p>{category2}</p>
      </div>
      <div>
        <h3>Date</h3>
        <p>{date}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div style={{ borderBottomWidth: 1, borderBottomStyle: 'solid', marginBottom: 10 }}></div>

    </div>
  );
}

export default Event;