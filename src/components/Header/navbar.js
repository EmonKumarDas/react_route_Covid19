import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a href="google.com" className="btn btn-ghost normal-case text-xl">Covid-19</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/graph'}>Chart</Link></li>
            <li><a href="google.com">Item 3</a></li> 
            <li><a href="google.com">Item 4</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;