import React, { useState, useEffect } from 'react';
import './FriendsPage.css';
import { getFriends } from '../../ApiCalls';

function FriendsPage() {
  const [search, setSearch] = useState('');
  const [friends, setFriends] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState([]);

  useEffect(() => {
    getFriends(1)
      .then(data => {
        setFriends(data.data.friends);
        setFilteredFriends(data.data.friends);
      })
      .catch(err => console.log(`There has been an error: ${err}`))
  }, []);

  useEffect(() => {
    filterSearch(search);
  }, [search]);

  const displayFriends = filteredFriends.map(friend => (
    <div className='long-tile' key={friend.user_id}>
      {friend.user_name}
    </div>
  ));

  const filterSearch = value => {
    const filteredFriends = friends.filter(friend => {
      return friend.user_name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredFriends(filteredFriends);
  }

  return (
    <div>
      <section className='card'>
        <h1 className='title'>Friends</h1>
        <input
          className='long-input'
          placeholder="Search"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        {displayFriends}
      </section>
    </div>
  )
}

export default FriendsPage;