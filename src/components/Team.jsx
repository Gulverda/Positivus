import React from 'react';
import '../CSS/Team.css'; // External CSS for styling

const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      title: 'CEO and Founder',
      experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      imgSrc: 'path/to/image1.jpg', // Update with actual image paths or links
    },
    {
      name: 'Jane Doe',
      title: 'Director of Operations',
      experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      imgSrc: 'path/to/image2.jpg',
    },
    {
      name: 'Michael Brown',
      title: 'Senior SEO Specialist',
      experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      imgSrc: 'path/to/image3.jpg',
    },
    {
      name: 'Emily Johnson',
      title: 'PPC Manager',
      experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      imgSrc: 'path/to/image4.jpg',
    },
    {
      name: 'Brian Williams',
      title: 'Social Media Specialist',
      experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      imgSrc: 'path/to/image5.jpg',
    },
    {
      name: 'Sarah Kim',
      title: 'Content Creator',
      experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
      imgSrc: 'path/to/image6.jpg',
    },
  ];

  return (
    <div className="team-container">
      <h2 className="team-title">Team</h2>
      <p className="team-description">
        Meet the skilled and experienced team behind our successful digital marketing strategies
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-img-wrapper">
              <img src={member.imgSrc} alt={`${member.name}`} className="team-img" />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title">{member.title}</p>
            <p className="team-experience">{member.experience}</p>
          </div>
        ))}
      </div>
      <button className="see-all-team">See all team</button>
    </div>
  );
};

export default Team;
