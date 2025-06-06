import React from 'react';

const UserList = () => {
  // Temporary mock data - replace with real data from your backend
  const users = [
    { id: '1', name: 'User One', online: true },
    { id: '2', name: 'User Two', online: false }
  ];

  return (
    <div className="user-list">
      <h3>Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.id} className={user.online ? 'online' : 'offline'}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList; // Make sure to export as default