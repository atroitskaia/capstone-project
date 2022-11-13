import React from 'react';
import './navBar.css';
import HeaderLinks from './HeaderLinks';
import logo from '../../assets/logo.svg';


const NavBar = () => {
  return (
    <div className="moodninja__navBar">
      <div className="moodninja__navBar-links">
        <div className="moodninja__navBar-links_logo">
         <img src={logo} alt="logo" />
        </div>

        <HeaderLinks />
      </div>
    </div>
  )
}

export default NavBar

