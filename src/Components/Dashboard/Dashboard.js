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