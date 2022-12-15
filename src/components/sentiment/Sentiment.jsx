import React from 'react'; 
import './sentiment.css';
import aboutIllustration from '../../assets/aboutIllustration.svg'

const Sentiment = () => {
  return (
    <div className="moodninja__header section__padding">
      
      
      <div className="moodninja__header-content">
        <h1 className="gradient__text">Sentiment analysis Platform</h1>                        
        <p> With the help of our AI easily identify positive, 
            negative or neutral sentiment of comments from social media platforms </p>
      </div>

      <div className="moodninja__header-image">
        <img src={aboutIllustration} />
        </div>
    </div>
  )
}

export default Sentiment