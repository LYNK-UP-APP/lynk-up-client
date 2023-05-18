import React, { useState } from 'react';
import EventTile from '../EventTile/EventTile';
import './Dashboard.css'

const Dashboard = () => {
  const events = [
    { id: 1, name: 'Event 1', time: '3:00 pm' },
    { id: 2, name: 'Event 2', time: '12:00 am' },
    { id: 3, name: 'Event 3', time: 9 }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="card">
        <h2 className="title">Events</h2>
          <input
            className='long-input'
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <EventTile events={filteredEvents} />
      </section>
    </div>
  );
};

export default Dashboard;