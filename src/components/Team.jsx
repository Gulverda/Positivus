import React, { useState, useEffect } from 'react';
import '../CSS/Team.css'; // External CSS for styling
import team1 from '../assets/team/team1.svg'; 
import team2 from '../assets/team/team2.svg';
import team3 from '../assets/team/team3.svg';
import team4 from '../assets/team/team4.svg';
import team5 from '../assets/team/team5.svg';
import team6 from '../assets/team/team6.svg';

const Team = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showAll, setShowAll] = useState(false);

  const teamMembers = [
    {
      name: 'John Smith',
      title: 'CEO and Founder',
      experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
      imgSrc: team1,
    },
    {
      name: 'Jane Doe',
      title: 'Director of Operations',
      experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
      imgSrc: team2,
    },
    {
      name: 'Michael Brown',
      title: 'Senior SEO Specialist',
      experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
      imgSrc: team3,
    },
    {
      name: 'Emily Johnson',
      title: 'PPC Manager',
      experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
      imgSrc: team4,
    },
    {
      name: 'Brian Williams',
      title: 'Social Media Specialist',
      experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
      imgSrc: team5,
    },
    {
      name: 'Sarah Kim',
      title: 'Content Creator',
      experience: '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
      imgSrc: team6,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleMembers = showAll ? teamMembers : teamMembers.slice(0, isMobile ? 4 : teamMembers.length);

  return (
    <div className="team-container">
      <div className="team_header">
        <h2 className="team-title">Team</h2>
        <p className="team-description">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>
      <div className="team-grid">
        {visibleMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div className="header_for_card">
              <div className="team-img-wrapper">
                <img src={member.imgSrc} alt={`${member.name}`} className="team-img" />
              </div>
              <div className="main_titles_for_card">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title1">{member.title}</p>
              </div>
            </div>
            <hr />
            <p className="team-experience">{member.experience}</p>
          </div>
        ))}
      </div>
      <div className="for_button_align">
        <button className="see-all-team" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'See less' : 'See all team'}
        </button>
      </div>
    </div>
  );
};

export default Team;
