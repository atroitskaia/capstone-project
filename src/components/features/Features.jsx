
import React from 'react'
import './Features.css';

import analyticsIllustration from '../../assets/analyticsIllustration.svg'

const Features = () => {
  return (

    <div className="moodninja__features section__padding">
      <div className="moodninja__features-image">
        <img src={analyticsIllustration} />
      </div>
      
      <div className="moodninja__features-content">
        <h2 className="gradient-bar moodninja__features-text">Get Instant Analytics</h2>
        <p>Sentiment analysis tool is AI software that automatically analyzes text data. 
          If you are a content creator for social media outlets, or a business owner our platform will provide instant analytics for your social media posts. 
          Our platform works by detecting emotion, tone, intensity and urgency in online conversatios, and categorizes those comments as positive, negative, or neutral.
   
        </p>
      </div>
    
    </div>
  )
}

export default Features
