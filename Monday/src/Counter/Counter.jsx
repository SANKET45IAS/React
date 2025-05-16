import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => setTimeout(() => {
        setCount(prevCount => prevCount + 1);  // ✅ Functional update to avoid stale state
      }, 3000)}>
        +1 (Delayed)
      </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-1</button>  {/* ✅ Fixed decrement */}
    </div>
  );
};
