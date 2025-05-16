import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavLinkBar from './NavLinkBar';

const Home = () => {
  const nav=useNavigate();

  return <div>
    <NavLinkBar/>
    <h2>This is the Home Page</h2>
    <button onClick={()=>{
      nav('/about');
    }}>About Move</button>
    <button onClick={()=>{
      nav('/dashboard');
    }}>DashBoard Move</button>

    <button onClick={()=>{
      nav("")
    }}>Random</button>
  </div>;
};

export default Home;
