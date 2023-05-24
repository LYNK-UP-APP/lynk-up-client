import React, { useState, useRef } from 'react';
import './CreateEvent.css';
import AutoComplete from '../Map/Map';

function CreateEvent() {
  const [eventName, setEventName] = useState('Event Name');
  const [eventDescription, setEventDescription] = useState('Event Description');
  const [date, setDate] = useState('Date');
  const [time, setTime] = useState('Time');
  const [group, setGroup] = useState(0);
  const inputRef = useRef()

  const handleSubmit = () => {
    const event = {
      eventName,
      eventDescription,
      date,
      time,
      group,
      inputRef
    };
    console.log("event", event)
    fetch('https://lynk-up-server.onrender.com/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "title": event.eventName,
            "date": event.date,
            "time": event.time,
            "address": event.inputRef,
            "group": event.group,
            "description": event.eventDescription
          }),
      })
        .then(response => {
          if (response.ok) {
            console.log('Event created successfully!');
          } else {
            console.error('Failed to create event');
          }
        })
        .catch(error => {
          console.error('Error creating event:', error);
        })
    }
  return (
    <div>
      <section className='card'>
        <h1 className='title'>Create New Event</h1>
        <input
          className='long-input'
          placeholder='Event Name'
          onChange={event => setEventName(event.target.value)}
        />
        <input
          className='large-input'
          placeholder='Event Description'
          onChange={event => setEventDescription(event.target.value)}
        />
        <p className='line-break'></p>
        <section className='date-time'>
          <input
            className='short-input'
            type='date'
            onChange={event => setDate(event.target.value)}
          />
          <input
            className='short-input'
            type='time'
            onChange={event => setTime(event.target.value)}
          />
        </section>
        <p className='line-break'></p>
        {/* Probably make this a drop-down menu */}
        <input
          className='long-input'
          placeholder='Group'
          onChange={event => setGroup(event.target.value)}
        />
        <AutoComplete inputRef={inputRef}/>
        <button onClick={handleSubmit}>Create Event</button>
      </section>
    </div>
  );
}

export default CreateEvent;