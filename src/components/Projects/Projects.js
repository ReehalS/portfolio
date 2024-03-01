import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bookfinder from "../../Assets/bookfinder.png" ;
import bin2dec from "../../Assets/bin2dec.png";
import aurebeshtranslator from "../../Assets/aurebeshtranslator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath = {aurebeshtranslator}
              title="Aurebesh Translator"
              description="Website to translate between English and Aurebesh, the written language of Star Wars."
              ghLink="https://github.com/reehals/aurebeshtranslator"
              demoLink="https://reehals.github.io/aurebeshtranslator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath = {bin2dec}
              title="Number Base Converter"
              description="Website to easily convert between numbers of different bases."
              ghLink="https://github.com/reehals/bin2dec"
              demoLink="https://reehals.github.io/bin2dec/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath = {bookfinder}
              title="BookFinder"
              description="Website to easily find diffrent books and their details."
              ghLink="https://github.com/reehals/bookfinder"
              demoLink="https://reehals.github.io/bookfinder/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
