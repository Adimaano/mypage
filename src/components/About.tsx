import React from 'react';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">Hi, I'm Adrian Dimaano</h1>
          <p className="about-subtitle">Software Developer & Problem Solver</p>

          <div className="about-description">
            <p>
              I'm a passionate software developer with expertise in building modern web applications.
              With a strong foundation in computer science and years of hands-on experience, I specialize
              in creating scalable, efficient, and user-friendly solutions.
            </p>
            <p>
              My journey in software development began with a fascination for how technology can solve
              real-world problems. Today, I continue to push the boundaries of what's possible with code.
            </p>
          </div>

          <div className="skills-section">
            <h2 className="skills-title">My Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card" style={{ borderColor: skill.color }}>
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="profile-placeholder">
            <div className="profile-icon">👨‍💻</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
