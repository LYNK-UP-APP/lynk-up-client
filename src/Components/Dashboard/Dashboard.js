import React, { useState } from 'react';
import EventTile from '../EventTile/EventTile';
import './Dashboard.css'

const Dashboard = () => {

  const events = [
    { id: 1, name: 'Event 1', time: 5 },
    { id: 2, name: 'Event 2', time: 2 },
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
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>EVENTS</h2>
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={handleSearch}
          />
            </div>
      <EventTile events={filteredEvents} />
    </div>
  );
};

export default Dashboard;