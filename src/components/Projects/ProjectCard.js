import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3 className="project-card-title">{props.title}</h3>
      <div className="project-card-img-container">
        {props.extra && (
            <p className="project-card-extra">{props.extra}</p>
        )}
        {props.imgPath && (
            <img className="project-card-img" src={props.imgPath} alt="card-img" />
        )}
      </div>
      <div
        className="project-card-btn"
        style={{ wrap: "wrap", justifyContent: "space-around" }}
      >
        <p className="project-card-description">{props.description}</p>
        {props.demoLink && (
          <Button
            href={props.demoLink}
            target="_blank"
            style={{ marginRight: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
        {props.demoPlaceholder && (
          <Button target="_blank" style={{ marginRight: "10px" }}>
            <CgWebsite /> &nbsp; {props.demoPlaceholder}
          </Button>
        )}
        <Button href={props.ghLink} target="_blank" style={{ marginLeft: "10px" }}>
          <BsGithub /> &nbsp; GitHub
        </Button>
      </div>
    </div>
  );
}

export default ProjectCard;