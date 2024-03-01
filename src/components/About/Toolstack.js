import React from "react";
import { Container } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
} from "react-icons/si";

function Toolstack() {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div className="tech-icons">
        <SiVisualstudiocode />
        <p>VS Code</p>
      </div>
      <div className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </div>
      <div className="tech-icons">
        <SiSlack />
        <p>Slack</p>
      </div>
    </Container>
  );
}

export default Toolstack;
