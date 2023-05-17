import React from 'react';
import './EventTile.css'

const EventTile = ({ events }) => {
  return (
    <div className='event-display'>
      {events.map(event => (
        <div className='long-tile' key={event.id}>
          <div className="event-info">
            <span className="event-name">{event.name}</span>
            <span className="event-time">{event.time} o'clock</span>
          </div>
          </div>
      ))}
    </div>
  );
};

export default EventTile;