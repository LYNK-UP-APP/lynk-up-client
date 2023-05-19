import React, { useState, useEffect } from 'react';
import './FriendsPage.css';
import { getFriends } from '../../ApiCalls';

function FriendsPage() {
  const [search, setSearch] = useState('');
  const [friends, setFriends] = useState([]);
  const [filteredFriends, setFilteredFriends] = useState([]);
  const [newFriendName, setNewFriendName] = useState('');

  useEffect(() => {
    getFriends(1)
      .then(data => {
        setFriends(data.data.friends);
        setFilteredFriends(data.data.friends);
      })
      .catch(err => console.log(`There has been an error: ${err}`))
  }, []);

  useEffect(() => {
    filterFriends(search);
  });

  const displayFriends = filteredFriends.map(friend => (
    <div className='long-tile' key={friend.user_id}>
      {friend.user_name}
    </div>
  ));

  const filterFriends = value => {
    const filteredFriends = friends.filter(friend => {
      return friend.user_name.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredFriends(filteredFriends);
  }

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  const handleAddName = () => {
    if (newFriendName !== '') {
      const newFriend = { user_id: friends.length + 1, user_name: newFriendName };
      setFriends([...friends, newFriend]);
      setFilteredFriends([...filteredFriends, newFriend]);
      setNewFriendName('');
    }
  };

  return (
    <div>
      <section className='card'>
        <h1 className='title'>Friends</h1>
        <input
          className='long-input'
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        {displayFriends}
        <div>
          <input
            type="text"
            placeholder="Enter a new name"
            value={newFriendName}
            onChange={event => setNewFriendName(event.target.value)}
          />
          <button onClick={handleAddName}>Add Name</button>
        </div>
      </section>
    </div>
  )
}

export default FriendsPage;