import { useMemo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [dbl, setdbl] = useState(0);

  function DoubleVal(n) {
    for (let i = 0; i < 100000000; i++) {} // Simulated heavy computation
    return n * 2;
  }
    // let Db=DoubleVal(dbl);// Repeated for same value it take much time
  let Db = useMemo(() => DoubleVal(dbl), [dbl]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
              }}>+</button>
      <br /><br />
      <input type="number" onChange={(e) => { setdbl(Number(e.target.value)) }} />
      <h2>Double : {Db}</h2>
    </>
  )
}

export default App
