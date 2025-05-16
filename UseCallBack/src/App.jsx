import { useState, useCallback } from 'react';
import './App.css';
import ChildrenBtn from './Components/ChildrenBtn';

function App() {
  const [count, setCount] = useState(0);
  const [child, setChild] = useState('');

  const handleChildClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <input type="text" onChange={(e) => setChild(e.target.value)} />
      <br />
      <ChildrenBtn btnNm={child} onClick={handleChildClick} />
    </>
  );
}

export default App;
