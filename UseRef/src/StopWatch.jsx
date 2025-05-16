import React, { useRef, useState } from 'react';

const StopWatch = () => {
  const [displayTime, setDisplayTime] = useState(0);
  const time = useRef(0);
  const intervalId = useRef(null);

  const start = () => {
    if (intervalId.current === null) {
      intervalId.current = setInterval(() => {
        time.current += 1;
        setDisplayTime(time.current);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const reset = () => {
    stop(); // stop first
    time.current = 0;
    setDisplayTime(0);
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <h5>{displayTime}</h5>
      <button onClick={start}>Start</button>
      <br />
      <button onClick={stop}>Stop</button>
      <br />
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default StopWatch;
