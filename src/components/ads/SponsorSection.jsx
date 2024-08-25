import React from 'react';
import '../../CSS/SponsorSection.css';

// Importing images
import amazonLogo from '../../assets/companyImages/amazon.svg';
import dribbbleLogo from '../../assets/companyImages/dribbble.svg';
import hubspotLogo from '../../assets/companyImages/hubspot.svg';
import notionLogo from '../../assets/companyImages/notion.svg';
import netflixLogo from '../../assets/companyImages/netflix.svg';
import zoomLogo from '../../assets/companyImages/zoom.svg';

// List of logos
const logos = [
  { src: amazonLogo, alt: 'Amazon', href: 'https://www.amazon.com' },
  { src: dribbbleLogo, alt: 'Dribbble', href: 'https://dribbble.com' },
  { src: hubspotLogo, alt: 'HubSpot', href: 'https://www.hubspot.com' },
  { src: notionLogo, alt: 'Notion', href: 'https://www.notion.so' },
  { src: netflixLogo, alt: 'Netflix', href: 'https://www.netflix.com' },
  { src: zoomLogo, alt: 'Zoom', href: 'https://zoom.us' }
];

// Function to repeat logos
const repeatLogos = (logos, times) => {
  return Array(times).fill(null).flatMap(() => logos);
};

const SponsorSection = () => {
  // Generate repeated logos array
  const repeatedLogos = repeatLogos(logos, 5); // Adjust '5' as needed for more repetition

  return (
    <div className="sponsor-section">
      <div className="sponsor-track">
        {repeatedLogos.map((logo, index) => (
          <a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-logo"
          >
            <img src={logo.src} alt={logo.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsorSection;
