import React, {useState} from 'react';
import './navBar.css';
import {Link} from 'react-router-dom';

const linkStyle = {
    padding: '0 18px',
}

const NavBar = ({isAuthenticated, setAuthenticated}) => {
    const links = () => {
        if (isAuthenticated) {
            return <div className="moodninja__navBar-links">
                <Link to='/dashboard' style={linkStyle} activeClassName="moodninja__navBar-link-items">Dashboard </Link>
                <Link to='/logout' activeClassName="moodninja__navBar-link-items">Logout</Link>
            </div>;
        } else {
            return <div className="moodninja__navBar-links">
                <Link to='/register' style={linkStyle} activeClassName="moodninja__navBar-link-items">Register </Link>
                <Link to='/login' activeClassName="moodninja__navBar-link-items">Login</Link>
            </div>;
        }
    };

    return (
        <div className="moodninja__navBar">
            <div className="moodninja__navBar-name"><Link to='/'>MOODNINJA.AI</Link></div>
            {links()}
        </div>
    )
}

export default NavBar


