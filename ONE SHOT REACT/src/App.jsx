import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Apple() {
  let n=45;
  const [a,setA]=useState(9);
  function hello(){
    console.log("Hello World");
    setA(30);
  }
  return (
    <>
     <h1 draggable="true">Hi, I am Sanket Sidhivinayak {a} {n} ,{ind()}</h1>
     <button onClick={hello}>Click</button>
     <Jagannath/>
    </>
  )
}
 function Jagannath(){
  return(
    <h1>Jay Jagannath💙🕉️</h1>
  )
 }

function ind(){
  return "Indian"
}

export default Apple
