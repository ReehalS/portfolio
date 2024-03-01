import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title className="project-card-title">{props.title}</Card.Title>
        <Card.Img variant="top" className="project-card-img" src={props.imgPath} alt="card-img" />
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <div className="project-card-btn" style={{wrap: "wrap", justifyContent: "space-around"}}>
          <Button variant="primary" href={props.demoLink} target="_blank" style={{marginRight: "10px"}}>
            <CgWebsite /> &nbsp;
            Demo
          </Button>

          <Button variant="primary" href={props.ghLink} target="_blank" style={{marginLeft: "10px"}}>
            <BsGithub /> &nbsp;
            GitHub
          </Button>
        </div>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
