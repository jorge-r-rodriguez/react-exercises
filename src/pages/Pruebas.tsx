import React, { useEffect, useState } from 'react';
import ButtonComponent from '../components/shared/ButtonComponent';
import { Solucion, SolucionUseEffect, SolucionUseState } from '../components/Ejercicios';

const Pruebas: React.FC = () => {
  const [ejercicio, setEjercicio] = useState(1);
  const [tabs, setTabs] = useState(1);
  //console.log(import.meta.env.VITE_APP_TEST);

  useEffect(() => {
    setEjercicio(1);
  }, [tabs]);

  return (
    <div className="app margin-top">
      <div className="display-flex">
        <div className="margin-right">
          <ButtonComponent onClick={() => setTabs(0)} text={'Ejercicios Básicos'} disabled={!(tabs != 0)} />
        </div>
        <div className="margin-right">
          <ButtonComponent onClick={() => setTabs(1)} text={'Ejercicios useState'} disabled={!(tabs != 1)} />
        </div>
        <div className="margin-right">
          <ButtonComponent onClick={() => setTabs(2)} text={'Ejercicios useEffect'} disabled={!(tabs != 2)} />
        </div>
      </div>
      <div className="display-flex margin-top">
        <div className="margin-right">
          <button onClick={() => setEjercicio(ejercicio - 1)} disabled={ejercicio == 1}>
            Anterior
          </button>
        </div>
        <div>
          <button onClick={() => setEjercicio(ejercicio + 1)} disabled={ejercicio == (tabs == 0 ? 12 : 4)}>
            Siguiente
          </button>
        </div>
      </div>
      <div className="display-flex">
        <div className="exercices-wrapper">
          {tabs == 0 ? (
            <Solucion exercice={ejercicio} />
          ) : tabs == 1 ? (
            <SolucionUseState exercice={ejercicio} />
          ) : (
            <SolucionUseEffect exercice={ejercicio} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pruebas;
