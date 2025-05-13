import React from 'react';
import { IUser } from '../../interfaces/users/IUser';

interface FormularioProps {
  user: IUser;
  onSubmit: () => void;
  onUserChange: (event) => void;
}

const Formulario: React.FC<FormularioProps> = ({ user, ...props }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Nombre:{' '}
        <input type="text" name="name" value={user.name || ''} onChange={props.onUserChange} placeholder="Nombre" />
      </div>
      <div>
        Telefono:{' '}
        <input type="text" name="phone" value={user.phone || ''} onChange={props.onUserChange} placeholder="Teléfono" />
      </div>
      <div>
        Email:{' '}
        <input type="text" name="email" value={user.email || ''} onChange={props.onUserChange} placeholder="Email" />
      </div>
      <h3>Información del usuario</h3>
      <p>
        <strong>Nombre:</strong> {user.name}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.phone}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
