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
                placeholder='Event Name'
                onChange={event => setEventName(event.target.value)}>
            </input>
            <input className='large-input'
                placeholder='Event Description'
                onChange={event => seteventDescription(event.target.value)}>
            </input>
            <p className='line-break'></p>
            <section className='date-time'>
                <input className='short-input'
                    placeholder='Date'
                    onChange={event => setDate(event.target.value)}>
                </input>
                <input className='short-input'
                    placeholder='Time'
                    onChange={event => setTime(event.target.value)}>
                </input>
            </section>
            <p className='line-break'></p>
            {/* Probably make this a drop down menu */}
            <input className='long-input'
                placeholder='group'
                onChange={event => setGroup(event.target.value)}>
            </input>
            <Map/>
        </section>
    </div>
  )
}

export default CreateEvent