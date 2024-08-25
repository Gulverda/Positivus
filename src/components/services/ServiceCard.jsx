import React from 'react';
import '../../CSS/Services.css';
import LearnMoreButton from './LearnMoreButton';

const ServiceCard = ({ title, subTitle, image, isDark, isGreen }) => {
  return (
    <div className={`service-card ${isDark ? 'dark' : ''} ${isGreen ? 'green' : ''}`}>
      <div className="service-card-content between">
        <div className="column" style={{display: "flex", justifyContent: "space-between"}}>
          <h3 className="column">
            <span className="for_title">{title}</span>
            <span className="for_subtitle">{subTitle}</span>
          </h3>
          <LearnMoreButton isDark={isDark} isGreen={isGreen} />
        </div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ServiceCard;
