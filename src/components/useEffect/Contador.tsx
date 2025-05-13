import React, { useState, useEffect } from 'react';
import ButtonComponent from '../shared/ButtonComponent';

const Contador: React.FC = () => {
  const [contador, setContador] = useState(0);
  const [isPar, setIsPar] = useState(false);

  useEffect(() => {
    setIsPar(contador % 2 == 0);
  }, [contador]);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  return (
    <div>
      <h2>
        Contador: {contador} es {isPar ? 'Par' : 'Impar'}
      </h2>
      <div className="display-flex">
        <div className="margin-right">
          <ButtonComponent onClick={decrementar} text={'Decrementar'} />
        </div>
        <div>
          <ButtonComponent onClick={incrementar} text={'Incrementar'} />
        </div>
      </div>
    </div>
  );
};

export default Contador;
