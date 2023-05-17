import React, { useState } from 'react';
import './GroupPage.css';

const dummyFriends = [
  { id: 1, name: 'Friend 1' },
  { id: 2, name: 'Friend 2' },
  { id: 3, name: 'Friend 3' }
];

const GroupPage = () => {
  const [groupName, setGroupName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFriends, setSelectedFriends] = useState([]);
  const [groups, setGroups] = useState([]);

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleFriendSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFriendSelection = (friend) => {
    setSelectedFriends([...selectedFriends, friend]);
    setSearchTerm('');
  };

  const handleGroupSubmit = (event) => {
    event.preventDefault();

    const newGroup = {
      groupName,
      friends: selectedFriends
    };

    setGroups([...groups, newGroup]);

    setGroupName('');
    setSelectedFriends([]);
  };

  const handleGroupSearch = (event) => {
  };

  return (
    <div className="groupPage">
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
        {groups.map((group) => (
          <div key={group.id}>{group.groupName}</div>
        ))}
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
          {dummyFriends
            .filter((friend) =>
              friend.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((friend) => (
              <div className='short-tile' key={friend.id} onClick={() => handleFriendSelection(friend.name)}>
                {friend.name}
              </div>
            ))}
          <p className='short-line-break'></p>
            <p className='selected'>Selected Friends:</p>
            {selectedFriends.map((friend, index) => (
              <span className='short-tile' key={index}>{friend}</span>
            ))}

          <button type="submit">Create Group</button>
        </form>
      </div>
    </div>
  );
};

export default GroupPage;