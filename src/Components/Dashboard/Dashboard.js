import React, { useState } from 'react';
import EventTile from '../EventTile/EventTile';
import './Dashboard.css'
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const events = useSelector(state => state.root.events);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="card">
        <h2 data-cy='dashboard-header' className="title">Events</h2>
          <input
            data-cy='search-input'
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