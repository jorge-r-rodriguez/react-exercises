import React from 'react';
import { User } from '../../../interfaces/users/User';

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li>
      <strong>{user.name}</strong>
      <br />
      Teléfono: {user.phone}
      <br />
      Email: {user.email}
    </li>
  );
};

export default UserItem;
