import React from 'react';

import { Footer, Features, Header, Possibility, WhatSentiment } from './containers';
import { Contact, Intro, NavBar, Analytics } from './components';

import './App.css';


const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <NavBar />
            <Header />
        </div>
        <Intro />
        <Analytics />
        <WhatSentiment />
        <Features />
        <Possibility />
        <Contact />
        <Footer />
    </div>
  );

export default App;