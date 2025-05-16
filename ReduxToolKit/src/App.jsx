import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment ,incrementByAmount,reset} from './features/counter/counterSlice';

const App = () => {
  const [val,SetVal]=useState(0);
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();
  function Inc(){
  dispatch(increment());
  }
  function Dec(){
dispatch(decrement());
  }
  function res(){
dispatch(reset());
  }
  function IncByAmt(){
    dispatch(incrementByAmount(val));
  }
  return (
    <>
    <button onClick={Inc}>+</button>
    <h4>Count : {count} </h4>
    <button onClick={Dec}>-</button>
    <button onClick={res}>reset</button>
    <input type="number" value={val} onChange={(e)=>{
      SetVal(e.target.value)
    }} />
    <button onClick={IncByAmt}>Increase by {val}</button>
    </>
  )
}

export default App;