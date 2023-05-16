import React from 'react';
import './EventInfo.css';

function EventInfo() {

  return (
    <section className='event-card'>
      <h2>Event Name Is This Name</h2>
      <section className='info-section'>
        <section className='event-info-left'>
          <p>August 15th, 2023 at 7:30 PM</p>
          <p>Best Friends Forever Group</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section className='event-info-right'>
          <p>910 S 49th St, Philadelphia, PA 19143</p>
          <div className='map-section'>
            🗺️
          </div>
        </section>
      </section>
    </section>
  );
}

export default EventInfo;