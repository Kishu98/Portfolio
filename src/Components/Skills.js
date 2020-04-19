import React from "react";
import "../css/Skills.css";

const Skills = () => (
  <div className="skills">
    <h1 className="skills-title">Skills Status</h1>
    <div className="skills-rank">
      <div className="topics">
        <section className="skills-topic">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Photoshop</p>
          <p>Java</p>
        </section>
        <section className="dash">
          <p> - </p>
          <p> - </p>
          <p> - </p>
          <p> - </p>
          <p> - </p>
          <p> - </p>
        </section>
        <section className="skills-rating">
          <p>6/10</p>
          <p>6/10</p>
          <p>5.5/10</p>
          <p>6/10</p>
          <p>7/10</p>
          <p>8/10</p>
        </section>
      </div>
      <div className="button-rank">
        <h2 className="rank">Rank - STUDENT</h2>
      </div>
    </div>
  </div>
);

export default Skills;
