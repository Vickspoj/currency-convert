import React from 'react';
import './socialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMediaButtons = () => {
  return (
    <div className='wrapper'>
      <div className="button">
        <a href="https://www.instagram.com/vicks.poj/" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </a>
      </div>
      <div className="button">
        <a href="https://www.facebook.com/vicks.poj" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </a>
      </div>
      <div className="button">
        <a href="https://github.com/Vickspoj" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </a>
      </div>
      <div className="button">
        <a href="https://twitter.com/vicks_poj" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaButtons;
