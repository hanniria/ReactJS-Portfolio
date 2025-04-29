import { useState } from "react";

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <div className="logo">HONEY <span>POP</span></div>
      <nav className="navbar">
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
