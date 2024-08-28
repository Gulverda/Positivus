import React, { useState } from 'react';
import '../CSS/ContactUs.css';
import contactImg from '../assets/contact.png';

const ContactUs = () => {
    const [selectedOption, setSelectedOption] = useState('Say Hi');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append('access_key', process.env.REACT_APP_WEB3FORMS_ACCESS_KEY); // Append the access key from env

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                alert('Message sent successfully!');
            } else {
                alert('Message failed to send: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error sending message. Please try again later.');
        });
    };

    return (
        <div className="for_contact">
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

                    {/* No need to manually add the hidden input field for the access key */}
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
                <img src={contactImg} alt="Contact Us" />
            </div>
        </div>
    );
};

export default ContactUs;
