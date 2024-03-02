import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" , width: "110%" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              paddinLeft: "50px",
              minWidth: "80%",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional Skillset
        </h1>
        <Techstack />

        <h1 className="project-heading">
          Tools I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
