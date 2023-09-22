// Header.js
import React from "react";
import "./Header.css";
import ParticlesBg from "particles-bg";

const Header = () => {
  return (
    <header className="header-container">
      <ParticlesBg type="square" num={15} bg={true} />
      <nav className="nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Carlos Pantin</h1>
        <p>
          Passionate Junior Developer. I love web development using React,
          however I am well acquainted wiht other technologies and approaches. I
          love challenges and I love to learn as much as I can to adapt to the
          industry changes. Feel free to see a little bit more about me and my work down below. (More projects WIP)
        </p>
        <a
          href="https://github.com/CarlosPantin"
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
