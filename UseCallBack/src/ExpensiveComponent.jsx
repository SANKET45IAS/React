import React, { useState, useCallback, useEffect, useRef } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const previousFunction = useRef(null);

  // Memoized function using useCallback
  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  // Track function recreation using useRef
  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveCalculation) {
        console.log("✅ Function not re-created");
      } else {
        console.log("❌ Function got re-created");
      }
    } else {
      previousFunction.current = expensiveCalculation;
    }

    // Update the ref to the current function
    previousFunction.current = expensiveCalculation;
  }, [expensiveCalculation]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Expensive Calculation Result: {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default ExpensiveComponent;
