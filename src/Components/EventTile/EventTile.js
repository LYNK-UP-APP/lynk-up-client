import React from 'react';
import './EventTile.css'

const EventTile = ({ events }) => {
  return (
    <div className='event-display'>
      {events.map(event => (
        <div className='event-tile' key={event.id}>
          <div className="event-info">
            <span className="event-name">{event.title}</span>
            <span className="event-name">{event.date}</span>
            <span className="event-time">{event.time}</span>
          </div>
          </div>
      ))}
    </div>
  );
};

export default EventTile;