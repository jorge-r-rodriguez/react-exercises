import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../interfaces/users/User';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data: User) => setUser(data))
      .catch((err) => {
        console.error('Error cargando usuario:', err);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando perfil...</p>;
  if (!user) return <p>No se pudo cargar el usuario.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Perfil del usuario: {user.name}</h2>
      <p>Teléfono: {user.phone}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
