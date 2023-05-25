import React, { useEffect, useState } from 'react';
import './GroupPage.css';
import { useDispatch } from 'react-redux';
import { getGroups, postGroups } from '../../ApiCalls';
import { getFriends } from '../../ApiCalls';

const GroupPage = () => {

  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [groups, setGroups] = useState([]);
  const [friends, setFriends] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getGroups()
    .then(data => {
      setGroups(data.data);
      setLoading(false);
    });
    getFriends()
    .then(data => {
      setFriends(data.data.friends)
      setLoading2(false)
    })
    .catch(err => console.log(`There has been an error: ${err}`))
  }, [dispatch]);

  const [groupName, setGroupName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [selectedFriendsID, setSelectedFriendsID] = useState([]);

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleFriendSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFriendSelection = (friend) => {
    console.log(friend)
    setSelectedFriends([...selectedFriends, friend[0]]);
    setSelectedFriendsID([...selectedFriendsID, friend[1]]);
    setSearchTerm('');
  };

  const handleGroupSubmit = (event) => {
    event.preventDefault();

    const newGroup = {
      name: groupName,
      friends: selectedFriendsID,
      user: 1
    };

    postGroups(newGroup)

    setGroups([...groups, newGroup]);

    setGroupName('');
    setSelectedFriends([]);
  };

  const handleGroupSearch = (event) => {
  };

  const loadingInfo = 
  <section>
    <h2 className='title'>Loading...</h2>
  </section>;

  return (
    <div className="groupPage">
      {!loading && !loading2 ? 
      <>
      <div className="half-card">
        <div className="group-header">
          <h2 className='title'>Groups</h2>
        </div>
        <input
            className='short-input'
            type="text"
            placeholder="Search groups..."
            onChange={handleGroupSearch}
          />
        {
        groups.map((group) => (
          <div className='short-tile' key={group.id}>{group.name}</div>
        ))
      }
      </div>

      <div className="half-card">
        <div className="group-header">
          <h2 className='title'>Create New Group</h2>
        </div>
        <form
          className='form' 
          onSubmit={handleGroupSubmit}>
          <input
            className='short-input'
            type="text"
            placeholder="Group Name"
            value={groupName}
            onChange={handleGroupNameChange}
          />
          <input
            className='short-input'
            type="text"
            placeholder="Search friends..."
            value={searchTerm}
            onChange={handleFriendSearch}
          />
          <p className='short-line-break'></p>
          {friends
            .filter((friend) =>
              friend.user_name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((friend) => (
              <div className='short-tile' key={friend.id} onClick={() => handleFriendSelection([friend.user_name, friend.id])}>
                {friend.user_name}
              </div>
            ))}
          <p className='short-line-break'></p>
            <p className='selected'>Selected Friends:</p>
            {selectedFriends.map((friend, index) => (
              <span className='short-tile' key={index}>{friend}</span>
            ))}
          <button className='submit' type="submit">Create Group</button>
        </form>
      </div>
      </>
      : loadingInfo }
    </div>
  );
};

export default GroupPage;
