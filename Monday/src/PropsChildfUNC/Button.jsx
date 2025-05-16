import React from 'react';

export const Button = (props) => {
  return (<>
   <h1>{props.children}</h1>
   <button onClick={props.Inc}>Click</button>
  </>
   
  );
};
