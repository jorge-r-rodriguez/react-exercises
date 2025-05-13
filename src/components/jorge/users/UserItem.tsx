import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../interfaces/users/User';

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li style={{ marginBottom: '1rem' }}>
      <strong>{user.name}</strong>
      <br />
      Teléfono: {user.phone}
      <br />
      Email: {user.email}
      <br />
      <Link to={`/profile/${user.id}`}>
        <button>Ver perfil</button>
      </Link>
    </li>
  );
};

export default UserItem;
