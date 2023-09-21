// Header.js
import React from 'react';
import './Header.css'; 
import ParticlesBg from 'particles-bg';



const Header = () => {
  return (
    <header className="header-container">
      <ParticlesBg type="square" num={15}  bg={true}/>
      <div className="header-content">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
          </ul>
        </nav>
        <h1>Your Name</h1>
        <p>Front-End Developer</p>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
