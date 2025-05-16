import React from 'react';

export const Card = (props) => {
  return (
    <div>
      <input 
        type="text" 
        onChange={(e) =>{ props.setName(e.target.value)}} 
        placeholder="Enter your name"
      />
      <h1>I am a Child - Title: {props.title}, Name: {props.name}</h1>
    </div>
  );
};
