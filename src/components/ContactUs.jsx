import React, { useState } from 'react';
import '../CSS/ContactUs.css';

import contactImg from '../assets/contact.svg';

const ContactUs = () => {
    const [selectedOption, setSelectedOption] = useState('Say Hi');
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.target);
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          alert('Message sent successfully!');
        })
        .catch((error) => {
          alert('Error sending message. Please try again later.');
        });
    };
  
    return (
     <>
           <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="radio-group">
            <label className={`radio-option ${selectedOption === 'Say Hi' ? 'active' : ''}`}>
              <input
                type="radio"
                name="contactReason"
                value="Say Hi"
                checked={selectedOption === 'Say Hi'}
                onChange={() => setSelectedOption('Say Hi')}
              />
              Say Hi
            </label>
            <label className={`radio-option ${selectedOption === 'Get a Quote' ? 'active' : ''}`}>
              <input
                type="radio"
                name="contactReason"
                value="Get a Quote"
                checked={selectedOption === 'Get a Quote'}
                onChange={() => setSelectedOption('Get a Quote')}
              />
              Get a Quote
            </label>
          </div>
  
          {/* Add your Web3Forms access key here */}
          <input type="hidden" name="access_key" value="5272f3a3-a9b4-41f8-b61b-88d9909e0d81
" />
  
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <img src={contactImg} alt="" />
      </div>
     </>
    );
  };  

export default ContactUs;
