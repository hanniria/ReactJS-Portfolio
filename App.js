import React, { useEffect } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {

  useEffect(() => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    const toggleMenu = () => {
      navLinks.classList.toggle('active');
    };

    menuIcon.addEventListener('click', toggleMenu);

    return () => {
      menuIcon.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
