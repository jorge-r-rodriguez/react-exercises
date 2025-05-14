import React, { useState, useEffect } from 'react';
import UsersList from '../components/jorge/users/UsersList';
import { User } from '../interfaces/users/User';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadUsers = () => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data))
      .catch((err) => {
        console.error('Error cargando usuarios:', err);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Listado de Usuarios</h2>

      <button onClick={loadUsers} disabled={loading}>
        {loading ? 'Cargando...' : 'Volver a cargar'}
      </button>
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : users.length > 0 ? (
        <UsersList users={users} />
      ) : (
        <p>No hay resultados</p>
      )}
    </div>
  );
};

export default UsersPage;
