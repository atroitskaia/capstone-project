import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navBar.css';
import logo from '../../assets/logo.svg';
import mdi_discord from '../../assets/mdi_discord.svg';
import mdi_github from '../../assets/mdi_github.svg';
import mdi_reddit from '../../assets/mdi_reddit.svg';
import mdi_twitter from '../../assets/mdi_twitter.svg';


const NavBar = () => {
  return (
    <div className="moodninja__navBar">
      <div className="moodninja__navBar-links">
        <div className="moodninja__navBar-links_logo">
         <img src={logo} alt="logo" />
        </div>
        <div className="moodninja__navBar-links_container">
          <a href ="mdi_discord"><img src={mdi_discord} alt="mdi_discord"/></a> 
          <a href ="mdi_github"><img src={mdi_github} alt="mdi_github"/></a>
          <a href ="mdi_reddit"><img src={mdi_reddit} alt="mdi_reddit"/></a>
          <a href ="mdi_twitter"><img src={mdi_twitter} alt="mdi_twitter"/></a>
        </div>  
      </div>
    </div>
  )
}

export default NavBar

