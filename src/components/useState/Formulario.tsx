import React, { useState } from 'react';

const Formulario: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => setInputText(event.target.value);

  return (
    <div>
      <input type="text" value={inputText} onChange={handleChange} placeholder="Escribe algo..." />
      <p>Texto ingresado: {inputText}</p>
    </div>
  );
};

export default Formulario;
