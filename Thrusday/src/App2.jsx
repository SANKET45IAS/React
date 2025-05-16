import { useState } from 'react';
import { LoginBtn } from './CRendering/LoginBtn';

function App2() {
  const [log, setLog] = useState(false);

  function logCheck(log) {
    return log ? "LogOut" : "LogIn";
  }

  return (
    <LoginBtn log={log} setLog={setLog} Display={logCheck(log)} />
  );
}

export default App2;
