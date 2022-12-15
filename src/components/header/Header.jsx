import NavBar from '../navBar/NavBar';
import React from 'react';
import './header.css';

const Header = ({isAuthenticated, setAuthenticated}) => {
    console.log(isAuthenticated);

    return (
        <div className="gradient__bg">
            <NavBar isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>
        </div>
    )
}

export default Header;
