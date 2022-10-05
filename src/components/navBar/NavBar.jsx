import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navBar.css';
import logo from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <div className="moodninja__navBar">
      <div className="moodninja__navBar-links">
        <div className="moodninja__navBar-links_logo">
         <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default NavBar

