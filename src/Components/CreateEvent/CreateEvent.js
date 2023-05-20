import React, { useState } from 'react'
import './CreateEvent.css'
import AutoComplete from '../Map/Map';

function CreateEvent() {

    const [eventName, setEventName] = useState('Event Name');
    const [eventDescription, seteventDescription] = useState('Event Description');
    const [date, setDate] = useState('Date');
    const [time, setTime] = useState('Time');
    const [group, setGroup] = useState('Group');

    //This is just so the properties are used for now, our API POST will use these variables later
    console.log(eventName, eventDescription, date, time, group)

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
                <input
                    className='short-input'
                    type="date" 
                    onChange={event => setDate(event.target.value)}
                    > 
                </input>
                <input 
                    className='short-input'
                    type="time" 
                    onChange={event => setTime(event.target.value)}
                    > 
                </input>
            </section>
            <p className='line-break'></p>
            {/* Probably make this a drop down menu */}
            <input className='long-input'
                placeholder='group'
                onChange={event => setGroup(event.target.value)}>
            </input>
            {/* <AutoComplete/> */}
        </section>
    </div>
  )
}

export default CreateEvent