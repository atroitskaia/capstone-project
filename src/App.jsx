import React from 'react'
import BGCircles from './components/bgCircles/BGCircles'
import NavBar from './components/navBar/NavBar'
import Intro from './components/intro/Intro'
import Analytics from './components/analytics/Analytics'
import URLBox from './components/urlBox/URLBox'
import Contact from './components/contact/Contact'


const App = () => {
    return (
        <>
            <BGCircles />
            <NavBar />
            <Intro />
            <Analytics />
            <URLBox />
            <Contact />

        </>    
    )
}

export default App
