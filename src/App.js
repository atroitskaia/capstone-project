import React, {useState} from 'react';
import {BrowserRouter, Switch, Routes, Route, NavLink} from "react-router-dom"
import MainLanding from './components/MainLanding';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Dashboard from './components/dashboard/Dashboard';

import Footer from './components/footer/Footer';

import './App.css';
// import AnalyticsLink from './components/analyticsLink/AnalyticsLink';

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    fetch("/account/session").then(response => setAuthenticated(response.ok));

    return <div className="App">
        <Header isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>
        <Routes>
            <Route path='/' element={<MainLanding/>}/>
            <Route path='/register' element={<Register isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>}/>
            <Route path='/login' element={<Login isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>}/>
            <Route path='/dashboard' element={<Dashboard isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>} />
            <Route path='/logout' element={<Logout isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>}/>
        </Routes>
        <div></div>
        {/* <MainLanding /> */}
        <Footer/>
    </div>;
}

export default App;
