import React from "react";
import { Container } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiFigma,
  SiTermius, 
  SiGithub
} from "react-icons/si";

function Toolstack() {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div className="tech-icons">
        <SiVisualstudiocode />
        <p>VS Code</p>
      </div>
      <div className="tech-icons">
        <SiGithub />
        <p>GitHub</p>
      </div>
      <div className="tech-icons">
        <SiPostman />
        <p>Postman</p>
      </div>
      <div className="tech-icons">
        <SiSlack />
        <p>Slack</p>
      </div>
      <div className="tech-icons">
        <SiFigma />
        <p>Figma</p>
      </div>
      <div className="tech-icons">
        <SiTermius />
        <p>Termius</p>
      </div>
      
    </Container>
  );
}

export default Toolstack;
