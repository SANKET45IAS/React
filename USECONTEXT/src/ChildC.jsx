import React, { use, useContext } from 'react';
import { UserContext } from './App';

export const ChildC = () => {
  const { user, SetUser } = useContext(UserContext);

  const updateReg = () => {
    SetUser({ ...user, redg_no: "2341019465" });
  };
console.log(user);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Reg No: {user.redg_no}</p>

      <button onClick={updateReg}>Update Reg No</button>
    </div>
  );
};
