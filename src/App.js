import React from 'react';
import { Route, Routes} from "react-router-dom"
import MainLanding from './components/MainLanding';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components//login/Login';
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
        </Routes>
            <div></div>
        {/* <MainLanding /> */}
        <Footer />
    </div>
);

export default App;
