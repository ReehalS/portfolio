import React from "react";
import { Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div className="about-div" style={{overflowX: "clip", paddingBottom:"40px"}}>
    <div className="about-section">
      <div>
        <Row className="textABout" style={{ justifyContent: "center", width: "100%" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
              paddingLeft: "50px",
              paddingRight: "50px",
              minWidth: "80%",
            }}
          >
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="about-heading">
          Languages, Frameworks, and Libraries I use
        </h1>
        <Techstack />

        <h1 className="about-heading">
          Tools I use
        </h1>
        <Toolstack />

      </div>
    </div>
    </div>
  );
}

export default About;
