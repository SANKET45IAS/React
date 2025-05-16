import React, { useState, createContext, useEffect } from 'react';
import BackA from './Project/BackA';

const BackTheme = createContext();

const App2 = () => {
  const [theme, setTheme] = useState('light');
  const [styling, setStyling] = useState({});

  useEffect(() => {
    if (theme === 'dark') {
      setStyling({ backgroundColor: 'rgb(41, 39, 39)', color: 'white', minHeight: '100vh' });
    } else {
      setStyling({ backgroundColor: 'rgb(247, 247, 247)', color: 'black', minHeight: '100vh' });
    }
  }, [theme]);

  return (
    <BackTheme.Provider value={{ theme, setTheme }}>
      <div style={styling}>
        <BackA />
      </div>
    </BackTheme.Provider>
  );
};

export default App2;
export { BackTheme };
