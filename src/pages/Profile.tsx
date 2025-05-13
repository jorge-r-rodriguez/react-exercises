import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../interfaces/users/IUser';
import Formulario from '../components/useEffect/Formulario';

const Profile: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(user);
  };

  if (loading) return <p>Cargando usuario...</p>;
  return (
    <div>
      <Formulario onSubmit={handleSubmit} onUserChange={handleChange} user={user} />
      <hr />
    </div>
  );
};

export default Profile;
