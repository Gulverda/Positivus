import React from 'react';
import ServiceCard from './ServiceCard';
import seoImage from '../../assets/servicesImages/SearchEngine.svg';
import ppcImage from '../../assets/servicesImages/Advertising.svg';
import socialMediaImage from '../../assets/servicesImages/SocMedia.svg';
import emailMarketingImage from '../../assets/servicesImages/EmailMarketing.svg';
import contentCreationImage from '../../assets/servicesImages/ContentCreation.svg';
import analyticsImage from '../../assets/servicesImages/Analytics.svg';
import '../../CSS/Services.css';

const Services = () => {
  const servicesData = [
    {
      title: 'Search engine',
      subTitle: 'optimization',
      image: seoImage,
      isDark: false,
      isGreen: false,
    },
    {
      title: 'Pay-per-click',
      subTitle: 'advertising',
      image: ppcImage,
      isDark: false,
      isGreen: true,
    },
    {
      title: 'Social Media',
      subTitle: 'Marketing',
      image: socialMediaImage,
      isDark: true,
      isGreen: false,
    },
    {
      title: 'Email',
      subTitle: 'Marketing',
      image: emailMarketingImage,
      isDark: false,
      isGreen: false,
    },
    {
      title: 'Content',
      subTitle: 'Creation',
      image: contentCreationImage,
      isDark: false,
      isGreen: true,
    },
    {
      title: 'Analytics and',
      subTitle: 'Tracking',
      image: analyticsImage,
      isDark: true,
      isGreen: false,
    },
  ];

  return (
    <div className="services-section">
      <div className="services-section-header flex">
        <h2>Services</h2>
        <p>
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="services-grid" style={{marginTop: "80px"}}>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            subTitle={service.subTitle}
            image={service.image}
            isDark={service.isDark}
            isGreen={service.isGreen}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
