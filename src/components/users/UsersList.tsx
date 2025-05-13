import React, { useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import { IUser } from '../../interfaces/users/IUser';

const UsersList: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;
  return (
    <div className="user-list">
      <hr />
      {users.map((user: IUser) => (
        <div key={user.id} className="user-wrapper">
          <UserInfo user={user} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
