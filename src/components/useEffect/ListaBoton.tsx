import React, { useState } from 'react';

const ListaBoton: React.FC = () => {
  const [items, setItems] = useState([]);

  const agregarItem = () => {
    const nuevoItem = `Elemento ${items.length + 1}`;
    setItems([...items, nuevoItem]);
  };

  return (
    <div>
      <h2>Lista de elementos</h2>
      <button onClick={agregarItem}>Agregar Elemento</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaBoton;
