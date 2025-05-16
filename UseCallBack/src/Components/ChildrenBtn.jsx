import React from 'react';

const ChildrenBtn = React.memo(({ btnNm, onClick }) => {
  console.log("Child Component re-rendered");

  return <button onClick={onClick}>{btnNm}</button>;
});

export default ChildrenBtn;
