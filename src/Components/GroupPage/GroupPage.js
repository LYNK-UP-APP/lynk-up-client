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
      <div className="group">
        <div className="group-header">
          <h2>Groups</h2>
          <input
            type="text"
            placeholder="Search groups..."
            onChange={handleGroupSearch}
          />
        </div>
        {groups.map((group) => (
          <div key={group.id}>{group.groupName}</div>
        ))}
      </div>

      <div className="create-group">
        <div className="create-group-header">
          <h2>Create New Group</h2>
        </div>
        <form onSubmit={handleGroupSubmit}>
          <input
            type="text"
            placeholder="Group Name"
            value={groupName}
            onChange={handleGroupNameChange}
          />
          <input
            type="text"
            placeholder="Search friends..."
            value={searchTerm}
            onChange={handleFriendSearch}
          />
          {dummyFriends
            .filter((friend) =>
              friend.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((friend) => (
              <div key={friend.id} onClick={() => handleFriendSelection(friend.name)}>
                {friend.name}
              </div>
            ))}
          <div>
            Selected Friends:
            {selectedFriends.map((friend, index) => (
              <span key={index}>{friend}</span>
            ))}
          </div>
          <button type="submit">Create Group</button>
        </form>
      </div>
    </div>
  );
};

export default GroupPage;