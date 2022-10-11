import React from 'react';
import mdi_discord from '../../assets/mdi_discord.svg';
import mdi_github from '../../assets/mdi_github.svg';
import mdi_reddit from '../../assets/mdi_reddit.svg';
import mdi_twitter from '../../assets/mdi_twitter.svg';

const HeaderLinks = () => {
    return (
        <div className="moodninja__navBar-links_container">          
          <a href="mdi_discord" className='mdi'><img src={mdi_discord} alt="mdi_discord"/></a> 
          <a href="mdi_github" className='mdi'><img src={mdi_github} alt="mdi_github"/></a>
          <a href="mdi_reddit" className='mdi'><img src={mdi_reddit} alt="mdi_reddit"/></a>
          <a href="mdi_twitter"><img src={mdi_twitter} alt="mdi_twitter"/></a>
        </div>  
    )
}

export default HeaderLinks;