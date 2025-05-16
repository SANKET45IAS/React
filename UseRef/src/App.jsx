import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let val=0;
function App() {
  let val=useRef(0);
  const [count, setCount] = useState(0);
  let name="Sanket Sidhivinayak"
  useEffect(() => {
  console.log("Call in Every Render");
  },)
  
  let b1=useRef();
  let b2=useRef();

  return (
    <>
      <button ref={b1} onClick={(e)=>{setCount(count+1); 
      // val+=1; console.log(val);
      val.current=val.current+1;//Set
      console.log(val.current);//Get
      b1.current.style.background="green";
      b2.current.style.background="red";
      }}>+</button>
      <h1>Count:{count}</h1>
      <button ref={b2} onClick={(e)=>{setCount(count-1);
        b2.current.style.background="green";
      b1.current.style.background="red";
      }}>-</button>
      <h1>{name}</h1>
    </>
  )
}

export default App
