import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apple from './App.jsx'
import {Maa,Lord} from './World.jsx'
import Counter from './Counter.jsx'
import { Browser } from './Browser.jsx'
import { Form } from './Form.jsx'
import { PropsSend } from './PropsSend.jsx'
import { APIData } from './APIData.jsx'
import { BrowserRouter } from 'react-router-dom';


 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Apple /> */}
    <Counter />
    {/* <FormHandling /> */}
    {/* <Browser/> */}
    {/* <Form/> */}
    {/* <PropsSend/> */}
    {/* <APIData/> */}

    {/* <BrowserRouter>
      <Lord />
      <Maa />
    </BrowserRouter> */}




   
  </StrictMode>,
)
