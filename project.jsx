import React from 'react';
import simpleWeb from '../assets/simple.jpg';
import navCards from '../assets/cards.jpg';
import ePort from '../assets/pf.jpg';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project-item">
          <img src={simpleWeb} alt="Simple Website" />
          <h3>Story Archive</h3>
          <p>A simple, responsive website containing two cards, where it provides information "about life."</p>
          <a href="https://hanniria.github.io/Responsive-Website/" className="btn">View Project</a>
        </div>
        <div className="project-item">
          <img src={navCards} alt="CARDS" />
          <h3>About Me</h3>
          <p>Utilizing HTML and media queries to create a simple responsive website featuring three cards.</p>
          <a href="https://hanniria.github.io/Responsive-Navigation-Bar-and-Cards/" className="btn">View Project</a>
        </div>
        <div className="project-item">
          <img src={ePort} alt="Portfolio" />
          <h3>E-Portfolio</h3>
          <p>A responsive e-portfolio website, showcasing achievements, projects, skills, and how to hire me.</p>
          <a href="#hero" className="btn">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
