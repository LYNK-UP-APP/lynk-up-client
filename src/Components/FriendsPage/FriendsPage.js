import React, { useState } from 'react'
import './FriendsPage.css'

function FriendsPage() {

  const friends = ['Trevor', 'Gus', 'Joe', 'Jill']
  const [search, setSearch] = useState('Search Friends');
  const [filteredFriends, setFilteredFriends] = useState(['Trevor', 'Gus', 'Joe', 'Jill']);

  const displayFriends = filteredFriends.map(friend => {
    return <div className='long-tile'>{friend}</div>
  })

  const filterSearch = value => {
    const filteredFriends = friends.filter(friend => {
      return friend.includes(value);
    });
    setFilteredFriends(filteredFriends)
    filteredFriends.map(friend => {
      return <div className='long-tile'>{friend}</div>
    })
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