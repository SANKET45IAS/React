import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FetchData from './FetchData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FetchData/>
  </StrictMode>,
)
