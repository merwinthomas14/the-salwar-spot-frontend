import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">The Salwar Spot</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);

export default Navbar;
