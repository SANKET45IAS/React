import React, { useState } from 'react';
import { Child } from './Child.jsx';
import { Button } from './Button.jsx';

export const Home = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 2);
  }

  return (
    <>
      <Button Inc={Increment}>
        <h1>Count is {count}</h1>k
      </Button>
      <Child>
        <h1>Jay Jagannath💙🕉️</h1>
        <h3>Hi, I am SANKET SIDHIVINAYAK</h3>
      </Child>
    </>
  );
};
