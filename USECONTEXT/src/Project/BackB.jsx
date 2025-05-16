import React, { useContext } from 'react';
import { BackTheme } from '../App2';

const BackB = () => {
  const { theme, setTheme } = useContext(BackTheme);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ padding: '10px 20px', margin: '20px' }}
    >
      Toggle Theme
    </button>
  );
};

export default BackB;
