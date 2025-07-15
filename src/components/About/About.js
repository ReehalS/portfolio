import React from "react";
import { Container, Col } from "react-bootstrap";

function About() {
  return (
    <div className="about-div">
      <Container fluid className="about-section" >
        <Col md={8} className="about-description">
          <p className="about-body">
            I am a Computer Science and Engineering student at UC Davis who is passionate about <b className="blue"> Web Development and Machine Learning.</b>
            <br />
            I am a quick learner and a team player who is always looking for new challenges and opportunities to grow. 
            <br />
            <br />I am fluent in languages like
            <b className="blue"> C++, Java, Javascript, and Python</b>
            , and have worked extensively with frameworks like
            <b className="blue"> React, Next.js, and Express.js</b>.
            <br />
          </p>
        </Col>  
      </Container>
    </div>
  );
}

export default About;
