
import React from 'react'
import './Features.css';

import analyticsIllustration from '../../assets/analyticsIllustration.svg'

const Features = () => {
  return (

    <div className="mmodninja__features section__padding">
      <div className="moodninja__features-image">
        <img src={analyticsIllustration} />
      </div>
      
      <div className="moodninja__features-content">
        <h2 className="gradient-bar moodninja__features-text">Get Instant Analytics</h2>
        <p>For content creators, knowing the sentiment of the general public towards 
           their own content or their competitors can help determine areas in which they can improve or content that is unsuitable for production. Similarly, advertisers can use this 
          information to decide on good candidates for sponsorships
        </p>
      </div>
    
    </div>
  )
}

export default Features
