import React from 'react'
import './analytics.css';

import analyticsIllustration from '../../assets/analyticsIllustration.svg'

const Features = () => {
  return (

    <div className="mmodninja__features section__padding">
      <div className="moodninja__features-image">
        <img src={analyticsIllustration} />
      </div>
      
      <div className="moodninja__features-content">
        <h2 className="gradient-bar moodninja__features-text">Get Instant Analytics</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in vol."
        </p>
      </div>
    
    </div>
  )
}

export default Features