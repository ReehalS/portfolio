import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote">
          <p style={{ textAlign: "justify" }}>
            I am <span className="blue">Sandeep Reehal </span>
            from <span className="blue"> Davis, California.</span>
            <br />
            I am a <span className="blue">Computer Engineering </span> sophomore at UC Davis.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
