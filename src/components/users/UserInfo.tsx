import React from 'react';
import { IUser } from '../../interfaces/users/IUser';
import { useNavigate } from 'react-router-dom';

interface UserInfoProps {
  user: IUser;
}

const UserInfo: React.FC<UserInfoProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${props.user.id}`);
  };
  return (
    <div onClick={handleClick}>
      <div>Nombre: {props.user.name}</div>
      <div>Username: {props.user.username}</div>
      <div>Email: {props.user.email}</div>
      <button onClick={handleClick}>Ir al Perfil</button>
    </div>
  );
};

export default UserInfo;
