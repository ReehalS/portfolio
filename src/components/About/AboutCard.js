import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote">
          <p style={{ textAlign: "justify" }}>
            I am a Computer Engineering Student at UC Davis who is passionate about <span className="blue">Web and App development.  </span>
            <br />
            I am a quick learner and a team player who is always looking for new challenges and opportunities to grow. 
            <br />
            <br />I am fluent in languages like
            <span className="blue"> C++, Javascript, Python, HTML and CSS </span>
            ,              
            <br /> And frameworks like
            <span className="blue"> React.js, Node.js, React Native, and Express.js </span>
            .
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
