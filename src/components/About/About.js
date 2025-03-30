import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";

function About() {
  return (
    <div className="about-div" style={{overflowX: "clip", paddingBottom:"40px"}}>
    <div className="about-section">
    <Container fluid className="home-about-section" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 className="section-heading">About Me</h1>
            <p className="home-about-body">
              I am a Computer Science and Engineering Student at UC Davis who is passionate about <b className="blue">Web Development and Machine Learning.  </b>
              <br />
              I am a quick learner and a team player who is always looking for new challenges and opportunities to grow. 
              <br />
              <br />I am fluent in languages like
              <b className="blue"> C++, Java, Javascript, and Python</b>
              ,
              <br /> And frameworks like
              <b className="blue"> React.js, Node.js, React Native, and Express.js</b>.
              <br />
            </p>
          </Col>          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="section-heading">Find Me On</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/reehals"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sandeep-reehal-385821263/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://devpost.com/sreehal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiDevpost />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
      <div>
        <h1 className="section-heading">
          Languages, Frameworks, and Libraries I Use
        </h1>
        <Techstack />

        <h1 className="section-heading">
          Tools I Use
        </h1>
        <Toolstack />
      </div>
    </div>
    </div>
  );
}

export default About;
