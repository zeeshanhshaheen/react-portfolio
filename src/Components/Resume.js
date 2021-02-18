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
    }

    return (
      <>
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

            <ScrollAnimation animateIn="fadeIn">
              <div className="nine columns main-col">
                <div className="bars">
                  <div className="skills">
                    <div class="skills-container">
                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>HTML</h3>
                        </div>
                      </div>

                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>CSS</h3>
                        </div>
                      </div>

                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>JAVASCRIPT</h3>
                        </div>
                      </div>

                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="/images/java2.jpg"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>JAVA</h3>
                        </div>
                      </div>

                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>REACT</h3>
                        </div>
                      </div>

                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="/images/json.png"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>JSON</h3>
                        </div>
                      </div>
                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="/images/rest.png"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>REST API</h3>
                        </div>
                      </div>
                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="/images/git.png"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>GIT</h3>
                        </div>
                      </div>
                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="/images/qa.png"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>QUALITY ASSURANCE</h3>
                        </div>
                      </div>
                      <div class="skills-box">
                        <div class="skills-title">
                          <div class="skills-img">
                            <img
                              src="/images/it.png"
                              alt=""
                              class="skills-icons"
                            />
                          </div>
                          <h3>IT OPTIMIZATION</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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

        <style jsx>
          {`
            skills-section {
              padding-top: 20px;
            }

            .skills-header {
              text-align: center;
              color: #fff;
              padding: 1rem;
              position: relative;
            }

            .skills-header:after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 100px;
              height: 4px;
              background-color: #2ecc71;
              border-radius: 2px;
            }

            .skills-container {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              justify-content: center;
              align-items: center;
              text-align: center;
              grid-gap: 1rem;
              padding: 1rem 80px;
              font-size: 1.2rem;
            }
            .skills-box {
              padding: 1rem;
              color: #000;
              cursor: pointer;
            }
            .skills-box:hover > .skills-title: after, 
            .skills-box:hover > .skills-title: before {
              width: 30px;
            }
            .skills-box:hover .skills-img {
              transform: translateX(-20px);
            }

            .skills-title {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 0.5rem;
              margin-bottom: 0.5rem;
              position: relative;
            }

            .skills-title:after {
              content: "";
              position: absolute;
              bottom: 0;
              rigth: 50%;

              transition: 0.5s;
            }

            .skills-title:before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 50%;
              width: 100px;
              height: 4px;
            }

            .skills-icons {
              width: 50px;
              z-index: 2;
            }

            .skills-img {
              width: 100px;
              height: 100px;
              position: relative;
              border-radius: 45px;
              background-color: #fff;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: 0.5s;
            }

            .skills-img:after {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 50%;
              height: 90px;

              border-radius: 45px 0 0 45px;
            }
            .skills-title h3 {
              color: #333;
              margin-top: 0.5rem;
            }
            @media screen and (max-width: 990px) {
              .skills-container {
                grid-template-columns: repeat(2, 1fr);
                padding: 2rem 50px;
              }
            }

            @media screen and (max-width: 650px) {
              .skills-container {
                grid-template-columns: 2fr;
                padding: 2rem 50px;
              }
            }
          `}
        </style>
      </>
    );
  }
}

export default Resume;
