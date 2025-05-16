import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(0)

  function cIn(a) {
    setCount(count + a)
  }

    //Var 1
  // useEffect(() => {
  //   alert("Variation 1")
  // }) 


  // Show alert on component mount
  //Var 2
  // useEffect(() => {
  //   alert("Variation 2")
  // }, [])

  // Variation 3
  // Reset count to 0 when input value changes
  useEffect(() => {
    setCount(0)
    // alert("Variation 3")
  }, [inputValue])

  // Variation 4
  // Multiple Dependency
  // useEffect(()=>{
  // alert("Variation 4")
  // },[count,inputValue])//Anyone from them either count or inputVaue

  // Variation 5
  // CleanUp Function
  useEffect(() => {
    alert("Variation 5")
    return () => { //Call when the third one is unmounted
      alert("Previous multiple value " + inputValue + " is unmounted"); //it work when the current state value is updated or change
    }
  }, [inputValue])
  

  return (
    <>
      <label htmlFor="val">Enter a Number to see its multiple's value: </label>
      <input
        type="number"
        id="val"
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <h1>Multiple value of {inputValue} is {count}</h1>
      <button onClick={() => cIn(inputValue)}>Next</button>
    </>
  )
}

export default App






//  Without useEffect
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   const [inputValue, setInputValue] = useState(0)

//   function cIn(a) {
//     setCount(count + a)
//   }

//   return (
//     <>
//       <label htmlFor="val">Enter a Number to see its multiple's value: </label>
//       <input
//         type="number"
//         id="val"
//         onChange={(e) => {
//           const value = Number(e.target.value)
//           setInputValue(value)
//           setCount(0) // Reset count directly here
//         }}
//       />
//       <h1>Multiple value of {inputValue} is {count}</h1>
//       <button onClick={() => cIn(inputValue)}>Next</button>
//     </>
//   )
// }

// export default App
