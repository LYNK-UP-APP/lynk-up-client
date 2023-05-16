// import React from 'react'

// function EventInfo() {
//   return (
//     <div>EventInfo</div>
//   )
// }

// export default EventInfo

import React from 'react';
import './EventInfo.css'

const EventInfo = ({ events }) => {
  return (
    <div className='event-display'>
      {events.map(event => (
        <div className='event-tile' key={event.id}>
          <div className="event-info">
            <span className="event-name">{event.name}</span>
            <span className="event-time">{event.time} o'clock</span>
          </div>
          </div>
      ))}
    </div>
  );
};

export default EventInfo;