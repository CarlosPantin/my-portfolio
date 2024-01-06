import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <section id="background" className="background-container">
      <div className="row">
        <div className="col-1">
          <h2>Education</h2>
        </div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>Häme University of Applied Sciences (2020-2023)</h2>
          <h3>Bachelors Degree Computer Applications</h3>
          <p className="background-information">
            During my studies, I learned a wide variety of technologies both for
            front-end and back-end approaches ranging from the basics such as
            HTML, CSS to more complex approaches like game development, AI,
            Cloud among others. Also, we had an ICT project in which together
            with a team, we had to solve an actual problem for a client, in this
            case, we worked together with Valio.
          </p>
        </div>
        <div className="col-4"></div>
      </div>
      <hr class="custom-line"></hr>

      <div className="row">
        <div className="col-1">
          <h2>Experience</h2>
        </div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>FullStack Developer Intern (October 2023- active)</h2>
          <h3>UnfairAdvantage Oy</h3>
          <p className="background-information">
            As a Full-Stack Developer Intern at UnfairAdvantage, I actively
            contributed to the development and maintenance of the companies main
            product, gaining hands-on experience in both front-end and back-end
            technologies. My role allowed me to enhance my skills in designing,
            implementing, and deploying scalable solutions, while working
            collaboratively with the team. I actively participated in daily
            meetings while working closely with the team to troubleshoot issues
            and implement solutions.
          </p>
          <h3>Key Achievemets and Responsabilities</h3>
          <p className="background-information">
            From the frontend perspective, I developed responsive and
            user-friendly interfaces using HTML, CSS, and JavaScript.
            Implemented dynamic client-side functionalities, ensuring a seamless
            user experience. Maintained the platform fixing and reporting bugs
            encountered on the platform.
          </p>
          <br />
          <p className="background-information">
            From the backend perspective, I contributed to server-side logic and
            database management using mongodb, Node.js and meteor.js.
            Collaborated with senior developers to optimize server performance
            and database queries.
          </p>
          <br />
        </div>
        <div className="col-4"></div>
      </div>
    </section>
  );
};

export default Background;
