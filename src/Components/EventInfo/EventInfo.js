import React, { useEffect, useState } from 'react';
import './EventInfo.css';
import { getEvent } from '../../ApiCalls';
import { Link } from 'react-router-dom'

function EventInfo({ id }) {

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState({});

  useEffect(() => {
    getEvent(id)
      .then(data => {
        setEvent(data.data); 
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [id]);

  const eventCard =
    <>
      <h2 data-cy='event-title' className='title'>{event.title}</h2>
      <section className='info-section'>
        <section className='event-info-left'>
          <p data-cy='event-date-time'>{`${event.date} at ${event.time}`}</p>
          <p data-cy='event-group'>Group name: {event.group?.name}</p>
          <p data-cy='event-desc'>{event.details}</p>
        </section>
        <section className='event-info-right'>
          <p data-cy='event-location'>{event.address}</p>
          <div className='map-section'>
            🗺️
          </div>
        </section>
        <button className='go-home-button'>
          <Link to='/dashboard'>Go Home</Link>
        </button>
      </section>
    </>
  ;

    const loadingInfo = 
      <section>
        <h2 className='title'>Loading...</h2>
      </section>
    ;

  return (
    <section className='event-card'>
      {loading ? loadingInfo : eventCard}
    </section>  
  );
}

export default EventInfo;