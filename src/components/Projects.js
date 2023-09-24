import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const projects = [
    {
      title: "ToDo App",
      description:
        "Simple ToDo app. The user can add, delete, edit and mark as done tasks of their choice!",
      status: "https://todoproject-coral.vercel.app/",
      github: "https://github.com/CarlosPantin/todoproject",
    },
    {
      title: "Weather App",
      description:
        "It happens to me that when I want to check the weather on my phone, the apps take a bit to load and have ads, so I deciced to make my own!",
      status: "https://weatherapp-self-two.vercel.app/",
      github: "https://github.com/CarlosPantin/my-weather-app",
    },
    {
      title: "Spotify Information",
      description:
        "I created an app in which the user can see their top artists, top songs and some data of their profile info all year long using spotify API. Unfortunately, thanks to the way in which spotify developer dashboard works, only registered users can test the app.",
      status: "https://www.youtube.com/watch?v=xsWV8AcXar8",
      github: "https://github.com/CarlosPantin/spotify-app",
    },
    
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects (more in development)</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <a href={project.status}>Click to view</a>
            </p>
            <a href={project.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
