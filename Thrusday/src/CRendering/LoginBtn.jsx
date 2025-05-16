import React from 'react';

export const LoginBtn = (props) => {
  return (
    <div>
      <button onClick={() => props.setLog(!props.log)}>
        <h1>{props.Display}</h1>
      </button>
    </div>
  );
};
 