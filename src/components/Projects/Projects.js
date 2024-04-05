import React from "react";
import Button from "react-bootstrap/Button";


import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import bookfinder from "../../Assets/bookfinder.png" ;
import bin2dec from "../../Assets/bin2dec.png";
import aurebeshtranslator from "../../Assets/aurebeshtranslator.png";
import breastCancerImg from "../../Assets/breast-cancer-ROC.png";
import bulltrackSTT from "../../Assets/bulltrackSTT.png";
import workoutTracker from "../../Assets/workout-site.png";

const projects = [
  {
    imgPath: bulltrackSTT,
    title: "Speech to Text",
    description: "App built in React Native to convert speech to text and give an output with Company names and Stock price keywords, built for BullTrack's App.",
    ghLink: "https://github.com/reehals/BulltrackSTT",
    demoPlaceholder: "Demo Unavailable"
  },
  {
    imgPath: workoutTracker,
    title: "Workout Tracker",
    description: "App built with React, Express and MongoDB to allow users to track their workouts.",
    ghLink: "https://github.com/reehals/workout-site",
    demoPlaceholder: "Demo Coming Soon"
  },
  {
    imgPath: bookfinder,
    title: "BookFinder",
    description: "Website to easily find diffrent books and their details.",
    ghLink: "https://github.com/reehals/bookfinder",
    demoLink: "https://reehals.github.io/bookfinder/"
  },
  {
    imgPath: aurebeshtranslator,
    title: "Aurebesh Translator",
    description: "Website to translate between English and Aurebesh, the written language of Star Wars.",
    ghLink: "https://github.com/reehals/aurebeshtranslator",
    demoLink: "https://reehals.github.io/aurebeshtranslator/"
  },
  {
    imgPath: breastCancerImg,
    title: "Breast Cancer Detection",
    description: "Comparing 10 different ML models to find the best one for classification of breast cancer",
    ghLink: "https://github.com/reehals/modelAccuracyTesting",
  },
  {
    imgPath: bin2dec,
    title: "Number Base Converter",
    description: "Website to easily convert between numbers of different bases.",
    ghLink: "https://github.com/reehals/bin2dec",
    demoLink: "https://reehals.github.io/bin2dec/"
  },

];

function Projects() {

  function Card(props){
    return (
      <div className="project-card">
        <h3 className="project-card-title">{props.title}</h3>
        {props.imgPath && <img className="project-card-img" src={props.imgPath} alt="card-img" />}
        
        <p className="project-card-description">{props.description}</p>
        <div className="project-card-btn" style={{wrap: "wrap", justifyContent: "space-around"}}>
          {props.demoLink && <Button href={props.demoLink} target="_blank" style={{marginRight: "10px"}}>
            <CgWebsite /> &nbsp;
            Demo
          </Button>}
          {props.demoPlaceholder && <Button target="_blank" style={{marginRight: "10px"}}>
            <CgWebsite /> &nbsp;
            {props.demoPlaceholder}
          </Button>}
          <Button href={props.ghLink} target="_blank" style={{marginLeft: "10px"}}>
            <BsGithub /> &nbsp;
            GitHub
          </Button>
        </div>
      </div>
    )
  }

  return (
      <div className="project-container">
        <h1 className="project-heading blue">
          My Recent Works
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div className="project-section">
          {projects.map((project, index) => {
            return (
              <Card
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                demoPlaceholder={project.demoPlaceholder}
                />
            )})}
        </div>
      </div>        
  );
}

export default Projects;