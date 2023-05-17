import React, { useState } from 'react'
import './CreateEvent.css'
import Map from '../Map/Map';

function CreateEvent() {

    const [eventName, setEventName] = useState('Event Name');
    const [eventDescription, seteventDescription] = useState('Event Description');
    const [date, setDate] = useState('Date');
    const [time, setTime] = useState('Time');
    const [group, setGroup] = useState('Group');

  return (
    <div>
        <section className='card'>
            <h1 className='title'>Create New Event</h1>
            <input className='long-input'
                value={eventName}
                onChange={event => setEventName(event.target.value)}>
            </input>
            <input className='large-input'
                value={eventDescription}
                onChange={event => seteventDescription(event.target.value)}>
            </input>
            <p className='line-break'></p>
            <section className='date-time'>
                <input className='short-input'
                    value={date}
                    onChange={event => setDate(event.target.value)}>
                </input>
                <input className='short-input'
                    value={time}
                    onChange={event => setTime(event.target.value)}>
                </input>
            </section>
            <p className='line-break'></p>
            <input className='long-input'
                value={group}
                onChange={event => setGroup(event.target.value)}>
            </input>
            <Map/>
        </section>
    </div>
  )
}

export default CreateEvent