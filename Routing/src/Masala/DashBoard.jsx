import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import NavLinkBar from './NavLinkBar';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  const nav = useNavigate();

  return (
    <div>
      <NavLinkBar />
      <h1>DashBoard Page</h1>
      <ul>
        <li><Link to="/dashboard/java">Java</Link></li>
      </ul>
      <button onClick={() => nav('/home')}>Home Move</button>
      <button onClick={() => nav('/about')}>About Move</button>

      {/* 👇 This is crucial for nested routes to render inside Dashboard */}
      <Outlet />
    </div>
  );
};

export default DashBoard;
