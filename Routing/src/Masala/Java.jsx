import React from 'react'
import { useNavigate } from 'react-router-dom';

const Java = () => {
    const nav=useNavigate();
  return (
    <div><h1>Java Course</h1>
         <button onClick={()=>{
      nav('/dashboard');
    }}>Back To DashBoard</button>
    </div>
  )
}

export default Java