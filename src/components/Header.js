import React from "react";
import "./Header.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header-container">
      <ParticlesBg type="square" num={7} bg={true} />
      <nav className="nav">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={1000}>
              <a href="">About</a>
            </Link>
          </li>
          <li>
          <Link to="background" smooth={true} duration={1000}>
              <a href="">Background</a>
            </Link>
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
          industry changes. Feel free to see a little bit more about me and my
          work down below. (More projects WIP)
        </p>
        <div className="buttons">
          <a
            href="https://github.com/CarlosPantin"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            GitHub
          </a>
          <a
            href=" "
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
