import React, { Component } from "react";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <ul>
              {education.description2.map((point) => {
                return (
                  <li>
                    <p>{point}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <ul>
              {work.description2.map((point) => {
                return (
                  <li>
                    <p>{point}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var techImage = "images/tech/" + skills.image;
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <div
            class="columns"
            style={{ textAlign: "center", padding: "30px" }}
            key={skills.name}
          >
            <img alt={skills.name} src={techImage} width="100" height="100" />
            <h5>{skills.name}</h5>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Preferred Tech</span>
            </h1>
          </div>
          <div>
            <div className="nine columns main-col">
              <p>{skillmessage}</p>
            </div>
            {/* <div className="ten columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div> */}
            <div className="fifteen columns">
              <ul className="b-grid-quarters s-bgrid-thirds cf">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
