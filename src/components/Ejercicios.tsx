import Contador from './useState/Contador';
import Formulario from './useState/Formulario';
import ListaBoton from './useState/ListaBoton';
import MostrarOcultar from './useState/MostrarOcultar';

import ContadorEffect from './useEffect/Contador';
import FormularioEffect from './useEffect/Formulario';
import ListaBotonEffect from './useEffect/ListaBoton';
import MostrarOcultarEffect from './useEffect/MostrarOcultar';

interface User {
  name: string;
  age: number;
  profession?: string;
}

export const Solucion: React.FC<{ exercice: number }> = (props) => {
  let users = [
    { name: 'Ruben', age: 20 },
    { name: 'Laura', age: 22 },
    { name: 'Jose', age: 25 },
    { name: 'Osama', age: 3 },
  ];
  props.exercice >= 7 &&
    (users = [
      ...users,
      { name: 'Ruben 2', age: 30 },
      { name: 'Laura 2', age: 32 },
      { name: 'Jose 2', age: 35 },
      { name: 'Osama 2', age: 36 },
    ]);
  const ejercicios = [
    <Ejercicio key={1} users={users} />,
    <Ejercicio2 key={2} users={users} />,
    <Ejercicio3 key={3} users={users} />,
    <Ejercicio4 key={4} users={users} />,
    <Ejercicio5 key={5} users={users} />,
    <Ejercicio6 key={6} users={users} />,
    <Ejercicio7 key={7} users={users} />,
    <Ejercicio8 key={8} users={users} />,
    <Ejercicio9 key={9} users={users} />,
    <Ejercicio10 key={10} users={users} />,
    <Ejercicio11 key={11} users={users} />,
    <Ejercicio12 key={12} users={users} />,
  ];

  return (
    <>
      <h2>Ejercicio {props.exercice}</h2>
      <hr />
      {ejercicios[props.exercice - 1]}
    </>
  );
};

interface UserInfoProps {
  name: string;
  age?: number;
  profession?: string;
  onClick?: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ profession = 'Programador', ...props }) => {
  return (
    <div>
      <div>Nombre: {props.name}</div>
      <div>Edad: {props.age}</div>
      {profession && <div>Profesión: {profession}</div>}
      {props.onClick && <button onClick={() => props.onClick()}>Click</button>}
    </div>
  );
};

export const SolucionUseState = (props) => {
  const [ejercicios] = [
    <Contador key={1} />,
    <MostrarOcultar key={2} />,
    <Formulario key={3} />,
    <ListaBoton key={4} />,
  ];
  return (
    <>
      <h2>Ejercicio {props.exercice}</h2>
      <hr />
      {ejercicios[props.exercice - 1]}
    </>
  );
};

export const SolucionUseEffect = (props) => {
  const ejercicios = [
    <ContadorEffect key={1} />,
    <MostrarOcultarEffect key={2} />,
    <ListaBotonEffect key={3} />,
    <FormularioEffect key={4} />,
  ];
  return (
    <>
      <h2>Ejercicio {props.exercice}</h2>
      <hr />
      {ejercicios[props.exercice - 1]}
    </>
  );
};

const Ejercicio = (props) => {
  return (
    <div className="user-list">
      <div className="bold">Convertir cada usuario en un objeto con name, age y mostrarlos en la lista</div>
      <hr />
      {props.users.map((user, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={user.name} age={user.age} profession="" />
          <hr />
        </div>
      ))}
    </div>
  );
};

const Ejercicio2 = (props) => {
  return (
    <div className="user-list">
      <div className="bold">
        Hacer desestructuración de las props y añadir por Defecto (De profession poner Programador por defecto)
      </div>
      <hr />
      {props.users.map((user, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={user.name} age={user.age} />
          <hr />
        </div>
      ))}
    </div>
  );
};

const Ejercicio3 = (props) => {
  return (
    <div className="user-list">
      <div className="bold">
        Crear un botón dentro del componente Usuario en el que reciba una función que muestra una alerta con su nombre.
      </div>
      <hr />
      {props.users.map((user, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={user.name} age={user.age} onClick={() => alert('Soy ' + user.name)} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export const Ejercicio4 = (props) => {
  return (
    <div className="user-list">
      <div className="bold">Hacer desestructuración del objeto usuario dentro del listado</div>
      <hr />
      {props.users.map(({ name, age }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={name} age={age} onClick={() => alert('Soy ' + name)} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export const Ejercicio5: React.FC<{ users: User[] }> = (props) => {
  return (
    <div className="user-list">
      <div className="bold">Uso de rest del objeto usuario dentro del listado (Explicar rest en un objeto)</div>
      <hr />
      {props.users.map(({ name, ...rest }, index) => {
        return (
          <div key={index} className="user-wrapper">
            <UserInfo name={name} {...rest} onClick={() => alert('Soy ' + name)} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export const Ejercicio6 = (props) => {
  return (
    <div className="user-list">
      <div className="bold">Hacer desestructuración del objeto usuario usando nombre como alias de name</div>
      <hr />
      {props.users.map(({ name: nombre, ...rest }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} age={rest.age} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export const Ejercicio7 = (props) => {
  return (
    <div className="user-list">
      <div className="bold">Combinar dos listados de usuarios (Uso de Spread)</div>
      <hr />
      {props.users.map(({ name: nombre, ...rest }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} age={rest.age} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export const Ejercicio8 = (props) => {
  return (
    <div className="user-list">
      <div className="bold">Filtrar por los usuarios que tengan más de 25 años.</div>
      <hr />
      {props.users
        .filter((user) => {
          return user.age >= 25;
        })
        .map(({ name: nombre, ...rest }, index) => (
          <div key={index} className="user-wrapper">
            <UserInfo name={nombre} age={rest.age} onClick={() => alert('Soy ' + nombre)} />
            <hr />
          </div>
        ))}
    </div>
  );
};

export const Ejercicio9 = (props) => {
  const [primero, segundo] = props.users;
  return (
    <div className="user-list">
      <div className="bold">Desestructuración del listado de usuarios (Mostrar el usuario 1 y el 2)</div>
      <hr />
      {[primero, segundo].map(({ name: nombre, ...rest }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} age={rest.age} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );
};
export const Ejercicio10 = (props) => {
  const [primero, , tercero] = props.users;
  return (
    <div className="user-list">
      <div className="bold">Desestructuración del listado de usuarios (Mostrar el usuario 1 y el 3)</div>
      <hr />
      {[primero, tercero].map(({ name: nombre, age }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} age={age} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );
};
export const Ejercicio11 = (props) => {
  const [, segundo, ...resto] = props.users;
  return (
    <div className="user-list">
      <div className="bold">
        Desestructuración del listado de usuarios (Mostrar el usuario 2 y el resto, uso de rest)
      </div>
      <hr />
      {[segundo, ...resto].map(({ name: nombre, age }, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} age={age} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export const Ejercicio12 = (props) => {
  const [{ name: primero }, { name: segundo }, { name: tercero }, { name: cuarto }] = props.users;
  return (
    <div className="user-list">
      <div className="bold">
        Combinando Desestructuración de objetos y arrays (Con el listado de usuarios extraer el nombre de los 4
        primeros)
      </div>
      <hr />
      {[primero, segundo, tercero, cuarto].map((nombre, index) => (
        <div key={index} className="user-wrapper">
          <UserInfo name={nombre} onClick={() => alert('Soy ' + nombre)} />
          <hr />
        </div>
      ))}
    </div>
  );
};
