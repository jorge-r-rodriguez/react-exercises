import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`El contador ahora vale: ${count}`);
  }, [count]);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Contador: {count}</h2>
      <p>Es {count % 2 === 0 ? 'par' : 'impar'}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        style={{ marginRight: '1rem' }}
      >
        -1
      </button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default Counter;
