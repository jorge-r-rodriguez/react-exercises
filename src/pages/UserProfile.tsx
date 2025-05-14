import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CreateUser } from '../interfaces/users/User';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<CreateUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);

  useEffect(() => {
    if (!Number(id)) navigate('/jorge/users');
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data: CreateUser) => {
        setUser(data);
      })
      .catch((err) => {
        console.error('Error cargando usuario:', err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSave = () => {
    // Simula de guardado
    setLoadingCreate(true);
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Datos guardados:', data);
        setLoadingCreate(false);
        navigate('/jorge/users');
      })
      .catch((err) => {
        console.error('Error al guardar usuario:', err);
        setLoadingCreate(false);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  if (loading) return <p>Cargando perfil...</p>;
  if (!user) return <p>No se pudo cargar el usuario.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Editar perfil de: {user.name}</h2>

      {/* Formulario de edición */}
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Nombre:
          <input type="text" value={user.name} name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="text" value={user.phone} name="phone" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={user.email} name="email" onChange={handleChange} />
        </label>
        <label>
          Color:
          <input type="text" value={user?.color} name="color" onChange={handleChange} />
        </label>
        <br />
        <button onClick={handleSave} style={{ marginTop: '1rem' }}>
          {loadingCreate ? 'Cargando...' : 'Guardar'}
        </button>
      </div>

      {/* Datos originales */}
      <p>
        <strong>Datos actuales:</strong>
      </p>
      <p>Nombre: {user.name}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Email: {user.email}</p>
      <p>Color: {user?.color}</p>
    </div>
  );
};

export default UserProfile;
