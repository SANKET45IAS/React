import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  );
};

export default NavigationBar;
