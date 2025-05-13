import React, { useState } from 'react';

const Contador: React.FC = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <div className="display-flex">
        <div className="margin-right">
          <button onClick={decrementar}>Decrementar</button>
        </div>
        <div>
          <button onClick={incrementar}>Incrementar</button>
        </div>
      </div>
    </div>
  );
};

export default Contador;
