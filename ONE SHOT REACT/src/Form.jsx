import React, { useState } from 'react';

export const Form = () => {
  const [name, setName] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Hello, " + name); // Logs the entered name
          setName('')
        }}
      >
        <label htmlFor="Name">Enter Your Name: </label>
        <input 
          type="text" 
          id="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} // Updates state on change
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
