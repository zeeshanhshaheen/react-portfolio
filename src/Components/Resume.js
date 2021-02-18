import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <ScrollAnimation animateIn="fadeIn">
            <div key={education.school}>
              <h3>{education.school}</h3>
              <p className="info">
                {education.degree1} <em className="date">{}</em>
              </p>

              <p className="info">
                {education.degree2} <em className="date">{}</em>
              </p>
            </div>
          </ScrollAnimation>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <ScrollAnimation animateIn="fadeIn">
            <div key={work.company}>
              <h3>{work.company}</h3>
              <p className="info">
                {work.title}
                <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
              <ul>
                <li>
                  <p>{work.description1}</p>
                  <p>{work.description2}</p>
                  <p>{work.description3}</p>
                  <p>{work.description4}</p>
                  <p>{work.description5}</p>
                  <p>{work.description6}</p>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <ScrollAnimation animateIn="fadeIn">
            <li key={skills.name}>
              <span
                style={{ width: skills.level }}
                className={className}
              ></span>
              <em>{skills.name}</em>
            </li>
          </ScrollAnimation>
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
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
        <hr />
        <br />

        <div className="row header-col" id="extracurricular">
          <div className="">
            <h1>
              <span>Extracurricular Activities</span>
            </h1>
          </div>

          <ScrollAnimation animateIn="fadeIn">
            <div className="nine columns main-col">
              <div className="">
                <ul className="skills">
                  Volunteered at the Academy of World languages to teach 5 th
                  and 10 th graders how to program Lego robots
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    );
  }
}

export default Resume;
