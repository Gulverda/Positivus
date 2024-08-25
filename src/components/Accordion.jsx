import React, { useState } from 'react';
import '../CSS/Accordion.css';
import minus from '../assets/minus.svg';  // Ensure this path is correct
import plus from '../assets/plus.svg';    // Assuming you have a plus.svg for the closed state

const Accordion = ({ title, content, isGreen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Determine the class based on both `isOpen` and `isGreen` props
  const accordionClass = `accordion-item ${isGreen && isOpen ? 'green' : ''}`;

  return (
    <div className={accordionClass}>
      <div className="accordion-title" onClick={toggleAccordion}>
        <div className="for_title_and_number">
          <div className="accordion-title-number">
            {title.number}
          </div>
          <div className="accordion-title-text">
            {title.text}
          </div>
        </div>
        <div className="accordion-icon">
          <img src={isOpen ? minus : plus} alt={isOpen ? 'Close' : 'Open'} />
        </div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <hr/>
          {content}
        </div>
      )}
    </div>
  );
};

const AccordionList = () => {
  const accordionData = [
    {
      title: { number: '01', text: 'Consultation' },
      content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
      isGreen: true,
    },
    {
      title: { number: '02', text: 'Research and Strategy Development' },
      content: 'We will research and develop strategies tailored to your business needs.',
      isGreen: true,
    },
    {
      title: { number: '03', text: 'Implementation' },
      content: 'We will implement the strategies to drive results.',
      isGreen: true,
    },
    {
      title: { number: '04', text: 'Monitoring and Reporting' },
      content: 'We will monitor the results and provide you with regular reports.',
      isGreen: true,
    },
    {
      title: { number: '05', text: 'Optimization' },
      content: 'We will optimize the strategies to improve results.',
      isGreen: true,
    },
    {
      title: { number: '06', text: 'Review and Adjust' },
      content: 'We will review the results and adjust the strategies as needed.',
      isGreen: true,
    },
  ];

  return (
    <>
          <div className="accordion_header">
      <h2 className="accordion_title">Our Working Process </h2>
      <p className="accordion_subtitle">Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>
    <div className="accordion-list">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          content={item.content}
          isGreen={item.isGreen}
        />
      ))}
    </div>
    </>
  );
};

export default AccordionList;
