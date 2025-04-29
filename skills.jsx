import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        
        <div className="skill-item">
          <i className="fas fa-film"></i>
          <h3>Video Editing</h3>
          <p>Master of using capcut templates with so many filter effects, like video greetings from different people and popular songs.</p>
        </div>

        <div className="skill-item">
          <i className="fas fa-palette"></i>
          <h3>Graphic Design</h3>
          <p>Generating logos, branding elements, and promotional visuals through the integration of artificial intelligence and Canva.</p>
        </div>

        <div className="skill-item">
          <i className="fas fa-desktop"></i>
          <h3>UI Designer</h3>
          <p>Employing ChatGPT as a creative assistant and YouTube tutorials as a visual learning resource to realize design concepts.</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
