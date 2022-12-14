import React from 'react';
import { BrowserRouter, Switch, Routes, Route,  NavLink} from "react-router-dom"
import MainLanding from './components/MainLanding';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
// import Dashboard from './components/dashboard/Dashboard';

import Footer from './components/footer/Footer';

import './App.css';
// import AnalyticsLink from './components/analyticsLink/AnalyticsLink';

const App = () => (
    <div className="App">
        <Header />

        <Routes>
        <Route path='/' element={<MainLanding/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
            <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
            <div></div>
        {/* <MainLanding /> */}
        <Footer />
    </div>
);

export default App;
