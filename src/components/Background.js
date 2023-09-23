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
          <h2>Junction 2023 Helsinki (November 10th-12th)</h2>
          <h3>Hackathon</h3>
          <p>
           (To be Filled)
          </p>
        </div>
        <div className="col-4"></div>
      </div>
    </section>
  );
};

export default Background;
