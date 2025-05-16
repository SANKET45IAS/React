import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLink.css';

const NavLinkBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinkBar;
