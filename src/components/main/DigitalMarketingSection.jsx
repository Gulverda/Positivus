import React from 'react';
import '../../CSS/DigitalMarketingSection.css';

import illustration from '../../assets/Illustration.svg';


const DigitalMarketingSection = () => {
  return (
    <div className="digital-marketing-section">
      <div className="content">
        <h1>Navigating the digital landscape for success</h1>
        <p>
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button className="cta-button">Book a consultation</button>
      </div>
      <div className="illustration">
        <img src={illustration} alt="Digital Marketing" />
      </div>
    </div>
  );
};

export default DigitalMarketingSection;
