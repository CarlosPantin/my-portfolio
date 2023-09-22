import React from "react";
import "./About.css";
import mypicture from "../images/MyPicture-modified.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-2">
            <img src={mypicture} alt="Your Name" className="about-image" />
          </div>
          <div className="col-3">
            <h2>About Me</h2>

            <p>
              Hello, I'm Carlos Pantin. I'm a passionate developer with a love
              for creating interactive and user-friendly web applications. I
              enjoy working with technologies like React, HTML, CSS, Javascript
              among others to build beautiful and responsive websites.
            </p>
            <p>
              When I'm not coding, I love to learn more about new coding
              practices and I love to keep a healthy body with working out. Feel
              free to explore my portfolio to see some of my recent projects.
            </p>
          </div>
          <div className="col-4"></div>
        </div>
        <h2 className="sys">Skills and strengths</h2>
        <div className="row">
          <div className="col-1">
            <div className="skill-card">
              <h3>Front-End Development</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
          <div className="col-2">
            <div className="skill-card">
              <h3>Front-End Development</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
