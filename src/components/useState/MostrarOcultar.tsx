import React, { useState } from 'react';

const MostrarOcultar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => setVisible(!visible);

  return (
    <div>
      <button onClick={toggleVisible}>{visible ? 'Ocultar' : 'Mostrar'} mensaje</button>
      {visible && <p>Este es un mensaje secreto</p>}
    </div>
  );
};

export default MostrarOcultar;
