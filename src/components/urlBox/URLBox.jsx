import React from 'react';
import './urlBox.css';
import urlplain from '../../assets/urlplain.svg'


const URLBox = () => {
  return (
 
    <div className="urlBox">
        <input type="text" placeholder="URL" />
        <button type="button">Go</button>
      
    </div>

    
  ) 
}


export default URLBox