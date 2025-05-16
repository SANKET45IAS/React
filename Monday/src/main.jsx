import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AboutMe } from './AboutMe/AboutMe.jsx'
import { Counter } from './Counter/Counter.jsx'
import { Home } from './PropsChildfUNC/Home.jsx'

createRoot(document.getElementById('root')).render(
// {/* <div id='About'>
//   <AboutMe name="Sanket" favFood="Dahi Bara"/>
//   <AboutMe name="Jyoti"/>
//   <AboutMe name="Shrijan"/>
//   </div> */}

// <>
// <Counter/>
// </>

<Home/>

)
