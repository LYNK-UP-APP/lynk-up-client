import React, { useState, useEffect } from 'react';
import './FriendsPage.css';
import { getFriends } from '../../ApiCalls'
import { useDispatch, useSelector } from 'react-redux';
import { updateFriends } from '../../app/rootSlice';


function FriendsPage() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const friends = useSelector(state => state.root.friends);
  const [filteredFriends, setFilteredFriends] = useState(friends);
  const user = useSelector(state => state.root.user);

  
  useEffect(() => {
    getFriends(1)
      .then(data => {
        dispatch(updateFriends(data.data.friends));
      })
      .catch(err => console.log(`There has been an error: ${err}`));
  }, [dispatch, user.id]);
  

  useEffect(() => {
    const filterFriends = value => {
      const filteredFriends = friends.filter(friend => {
        return friend.user_name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredFriends(filteredFriends);
    };
    filterFriends(search);
  }, [search, friends]);


  const displayFriends = filteredFriends.map(friend => (
    <div className='long-tile' key={friend.user_id}>
      {friend.user_name}
    </div>
  ));


  const handleSearch = event => {
    setSearch(event.target.value);
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
      </section>
    </div>
  );
}

export default FriendsPage;