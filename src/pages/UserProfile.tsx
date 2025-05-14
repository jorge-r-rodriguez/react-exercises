import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { User } from '../interfaces/users/User';

const UserProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Campos editables
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data: User) => {
        setUser(data);
        setName(data.name);
        setPhone(data.phone);
        setEmail(data.email);
      })
      .catch((err) => {
        console.error('Error cargando usuario:', err);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSave = () => {
    const updatedUser = { name, phone, email };

    // Simula de guardado
    fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Datos guardados:', data);
        navigate('/jorge/users');
      })
      .catch((err) => {
        console.error('Error al guardar usuario:', err);
      });
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
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Teléfono:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button onClick={handleSave} style={{ marginTop: '1rem' }}>
          Guardar
        </button>
      </div>

      {/* Datos originales */}
      <p>
        <strong>Datos actuales:</strong>
      </p>
      <p>Nombre: {user.name}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
