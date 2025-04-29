import React from 'react';
import aboutImage from '../assets/me.jfif';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="About Louizza" />
        </div>
        <div className="about-text">
          <h2>Hello, there!</h2>
          <p>My name is Louizza Pajarillon, a second-year student from the Bachelor of Science in Information Technology program at Dalubhasaan ng Lungsod ng Lucena. I have skills in multimedia editing and a little in programming. I like to watch Chinese short ads with cringe acting. I am also a professional bot in CODM.</p>
          <a href="#contact" className="btn">Hire Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;
