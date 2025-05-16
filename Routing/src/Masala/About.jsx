import React from 'react'
import { useNavigate } from 'react-router-dom';
import NavLinkBar from './NavLinkBar';

const About = () => {
  const nav=useNavigate();
  return (
    <div>
      <NavLinkBar/>
      <h1>About Page</h1>
      <button onClick={()=>{
      nav('/home');
    }}>Home Move </button>
    <button onClick={()=>{
      nav('/dashboard');
    }}>DashBoard Move</button>
    </div>
  )
}

export default About