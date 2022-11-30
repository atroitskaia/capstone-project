import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="moodninja__navBar">
      <div className="moodninja__navBar-name">MOODNINJA.AI</div>
      <div className="moodninja__navBar-links">
        <Link to='/register' activeClassName="moodninja__navBar-link-items">Register </Link>
        <Link to='/login' activeClassName="moodninja__navBar-link-items">Login</Link>
      </div>
    </div>
  )
} 

export default NavBar


