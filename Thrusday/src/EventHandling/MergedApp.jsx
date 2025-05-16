import React, { useState } from 'react';

const MergedApp = () => {
  const [inputValue, setInputValue] = useState('');

  const handleAlertClick = () => {
    alert('Welcome to CodeHelp!');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log('Input:', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const handleParentClick = () => {
    console.log('Parent clicked');
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
    console.log('Child clicked');
  };

  return (
    <div>
      <h1>Hello from MergedApp</h1>

      <button onClick={handleAlertClick}>Click Me!</button>

      <form onSubmit={handleSubmit}>
        <label>Input: </label>
        <input value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>

      <div onClick={handleParentClick} style={{ marginTop: '20px' }}>
        <h3>Parent</h3>
        <button onClick={handleChildClick}>Child</button>
      </div>
    </div>
  );
};

export default MergedApp;
