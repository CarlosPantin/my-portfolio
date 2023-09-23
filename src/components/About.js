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

            <p className="aboutme-text">
              Hello, I'm Carlos Pantin. I'm a passionate developer with a love
              for creating interactive and user-friendly web applications. I
              enjoy working with technologies like React, HTML, CSS, Javascript
              among others to build beautiful and responsive websites.
            </p>
            <p className="aboutme-text">
              When I'm not coding, I love to learn more about new coding
              practices and I love to keep a healthy body with working out. Feel
              free to explore my portfolio to see some of my recent projects.
            </p>
          </div>
          <div className="col-4"></div>
        </div>
        <h2 className="sys">Skills and Interests</h2>
        <div className="row">
          <div className="col-1">
            <div className="skill-card">
              <h3>Technologies</h3>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>CSS</li>
                <li>HTML</li>
                 <li>MySQL</li>
                <li>C#</li>
                <li>Git</li>
                <li>Python</li>
                <li>PHP</li>

              </ul>
              <p className="card-text">I have learned plenty of new technologies and I am always aiming to learn new stuff!
              I feel more confident with Javascript and some of it's frameworks like React but I am also well aquainted with other technologies and approaches.</p>
            </div>
            
          </div>
          <div className="col-2">
            <div className="skill-card">
              <h3>Person</h3>
              <ul>
                <li>Problem Solver</li>
                <li>Perseverant</li>
                <li>Hard Working</li>
                <li>Passionate</li>
                <li>Team Work</li>
                <li>Fast Learner</li>
                <li>Attitude</li>
                <li>Focused</li>
                <li>Self Improvement</li>

              </ul>
              <p className="card-text">I love to program and I trully believe that with my personal and technology skill sets, I am ready to apply all of my strengths and skills into the professional world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
