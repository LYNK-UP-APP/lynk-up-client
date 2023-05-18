import React from 'react';
import './EventTile.css';
import { Link } from 'react-router-dom';

const EventTile = ({ events }) => {
  return (
    <div className='event-display'>
      {events.map(event => (
        <div className='long-tile' key={event.id}>
          <div className="event-info">
            <Link to={`events/${event.id}`}><span className="event-name">{event.title}</span></Link>
            <span className="event-name">{event.date}</span>
            <span className="event-time">{event.time}</span>
          </div>
          </div>
      ))}
    </div>
  );
};

export default EventTile;