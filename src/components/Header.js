import React from "react";
import "./Header.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-scroll";
import Download from "./Download";

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
            <Link to="projects" smooth={true} duration={1000}>
              <a href="">Projects</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h1>Carlos Pantin</h1>
        <p>
          Passionate Junior Developer here, and I'm all about web development,
          especially when it comes to React. But hey, I'm no one-trick pony.
          I'm pretty familiar with a bunch of other tech and methods too. I
          thrive on challenges, and I'm all about soaking up knowledge to keep
          up with the ever-changing industry. Check out a bit more about me and
          what I'm working on down below. (Got more projects in the works, by
          the way!)
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
          <Download />
        </div>
      </div>
    </header>
  );
};

export default Header;
