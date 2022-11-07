import React from 'react';
import MainLanding from './components/MainLanding';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
// import AnalyticsLink from './components/analyticsLink/AnalyticsLink';

const App = () => (
    <div className="App">
        <Header />
        <MainLanding />
        {/* <AnalyticsLink /> */}
        <Footer />
    </div>
);

export default App;
