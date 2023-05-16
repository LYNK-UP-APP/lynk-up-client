import React, { useState } from 'react'
import './FriendsPage.css'

function FriendsPage() {

  const [friends, setFriends] = useState(['Trevor', 'Gus', 'Joe', 'Jill'])
  const [search, setSearch] = useState('Search Friends');

  const displayFriends = friends.map(friend => {
    return <div className='long-tile'>{friend}</div>
  })

  const filterSearch = (value) => {
    console.log(value)
    setFriends(['Trevor', 'Gus', 'Joe', 'Jill'])
    setFriends(friends.filter(friend => friend.includes(value)))
  }

  return (
    <div>
      <section className='card'>
      <h1 className='title'>Friends</h1>
        <input className='long-input'
              value={search}
              onChange={event => setSearch(event.target.value)}
              onInput={event => filterSearch(event.target.value)}>
        </input>
            {
              displayFriends
            }
      </section>
    </div>
  )
}

export default FriendsPage