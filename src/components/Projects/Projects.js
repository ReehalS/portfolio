import React from "react";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// import bookfinder from "../../Assets/bookfinder.png";
// import bin2dec from "../../Assets/bin2dec.png";
// import aurebeshtranslator from "../../Assets/aurebeshtranslator.png";
import breastCancerImg from "../../Assets/breast-cancer-ROC.png";
import bulltrackSTT from "../../Assets/bulltrackSTT.png";
import workoutTracker from "../../Assets/workout-site.png";
import dcmhImage from "../../Assets/dcmh.png";
import nilayHealth from "../../Assets/nilayHealth.png";
import collaborativePlanner from "../../Assets/CollaborativePlanner.png";
import aslTranslator from "../../Assets/ASLTranslator.png";
import songClassifier from "../../Assets/SongGenreClassifier.png";

const projects = [
  {
    imgPath: aslTranslator,
    title: "ASL Alphabet Translator",
    description: "Live translator between American Sign Language (ASL) Alphabet signs and their corresponding letters.",
    demoLink: "https://asl-translator-ccc.streamlit.app/",
    ghLink: "https://github.com/ReehalS/ASL-Translator",
    type: ["Machine Learning"],
    location: ["Club"],
    techStack: ["Python"],
  },
  {
    imgPath: collaborativePlanner,
    title: "Collaborative Trip Planner",
    description:
      "Website to allow people to interactively plan trips together. You can invite others using unique join codes, create activities, and allow users to vote for desirable activities.",
    ghLink: "https://github.com/ReehalS/collaborative-trip-planner",
    demoPlaceholder: "Demo Coming Soon",
    type: ["Full Stack"],
    location: ["Personal"],
    techStack: ["Next.js"],
  },
  {
    imgPath: songClassifier,
    title: "Song Genre Classifier",
    description: "Predict a song's genre purely from its audio file using a Random Forest Classifier.",
    demoLink: "https://songclassifiers.streamlit.app/",
    ghLink: "https://github.com/ReehalS/TeamTBD_SongClassifier",
    type: ["Machine Learning"],
    location: ["Club"],
    techStack: ["Python"],
  },
  {
    imgPath: nilayHealth,
    title: "Nilay Health",
    description:
      "Website to help hospitals track patient medications and appointments, message patients reminding them of appointments and generate Prescriptions after appointments.",
    ghLink: "",
    demoPlaceholder: "Demo Coming Soon",
    type: ["Full Stack"],
    location: ["Personal"],
    techStack: ["React"],
  },
  {
    imgPath: dcmhImage,
    title: "Donation and Inventory Manager",
    extra: "HackDavis 2024 Prize Winner",
    description:
      "A website that facilitates both online monetary donations and in-person item donations for Davis Community Meals and Housing (DCMH)...",
    ghLink: "https://github.com/reehals/dcmh_hackdavis",
    demoLink: "https://dcmh-hackdavis.vercel.app/",
    type: ["Full Stack"],
    location: ["Hackathon"],
    techStack: ["React"],
  },
  {
    imgPath: bulltrackSTT,
    title: "Speech to Text Converter",
    description:
      "App built in React Native to convert speech to text and give an output with Company names and Stock price keywords, built for BullTrack's App.",
    ghLink: "https://github.com/reehals/BulltrackSTT",
    demoPlaceholder: "Demo Unavailable",
    type: ["Mobile"],
    location: ["Work"],
    techStack: ["React-Native"],
  },
  {
    imgPath: workoutTracker,
    title: "Workout Buddy",
    description:
      "Website built with React, Express and MongoDB to allow users to track their workouts.",
    ghLink: "https://github.com/reehals/workout-site",
    demoLink: "https://workoutbuddy-sr.vercel.app/",
    type: ["Full Stack"],
    location: ["Personal"],
    techStack: ["React"],
  },
  {
    imgPath: breastCancerImg,
    title: "Breast Cancer Detection",
    description:
      "Comparing 10 different ML models to find the best one for classification of breast cancer",
    ghLink: "https://github.com/reehals/modelAccuracyTesting",
    type: ["Machine Learning"],
    location: ["Personal"],
    techStack: ["Python"],
  },
  // {
  //   imgPath: bookfinder,
  //   title: "BookFinder",
  //   description: "Website to easily find different books and their details.",
  //   ghLink: "https://github.com/reehals/bookfinder",
  //   demoLink: "https://reehals.github.io/bookfinder/",
  //   type: ["Full Stack"],
  //   location: ["Personal"],
  //   techStack: ["React"],
  // },
  // {
  //   imgPath: aurebeshtranslator,
  //   title: "Aurebesh Translator",
  //   description:
  //     "Website to translate between English and Aurebesh, the written language of Star Wars.",
  //   ghLink: "https://github.com/reehals/aurebeshtranslator",
  //   demoLink: "https://reehals.github.io/aurebeshtranslator/",
  //   type: ["Full Stack"],
  //   location: ["Personal"],
  //   techStack: ["React"],
  // },
  // {
  //   imgPath: bin2dec,
  //   title: "Number Base Converter",
  //   description:
  //     "Website to easily convert between numbers of different bases.",
  //   ghLink: "https://github.com/reehals/bin2dec",
  //   demoLink: "https://reehals.github.io/bin2dec/",
  //   type: ["Full Stack"],
  //   location: ["Personal"],
  //   techStack: ["React"],
  // },
];

function Card(props) {
  return (
    <div className="project-card">
      <h3 className="project-card-title">{props.title}</h3>
      {props.imgPath && (
        <img className="project-card-img" src={props.imgPath} alt="card-img" />
      )}
      {props.extra && (
        <p className="project-card-description">{props.extra}</p>
      )}
      {props.description && (
        <p className="project-card-description">{props.description}</p>
      )}
      <div
        className="project-card-btn"
        style={{ wrap: "wrap", justifyContent: "space-around" }}
      >
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

function Projects() {
  // Three separate state variables for the three filter categories
  const [selectedType, setSelectedType] = React.useState("All");
  const [selectedLocation, setSelectedLocation] = React.useState("All");
  const [selectedTech, setSelectedTech] = React.useState("All");

  // Filter options for each category
  const allTypes = ["All", "Full Stack", "Mobile", "Machine Learning", "Robotics"];
  const allLocations = [
    "All",
    "Personal",
    "Club",
    "Work",
    "Research",
    "Hackathon",
    "Open Source",
  ];
  const allTechs = ["All", "React", "Next.js", "Python", "C/C++", "Java", "React-Native"];

  // Filter projects by checking if the selected filter is included in the array for each project
  const filteredProjects = projects.filter((project) => {
    const matchType =
      selectedType === "All" || (project.type && project.type.includes(selectedType));
    const matchLocation =
      selectedLocation === "All" ||
      (project.location && project.location.includes(selectedLocation));
    const matchTech =
      selectedTech === "All" || (project.techStack && project.techStack.includes(selectedTech));
    return matchType && matchLocation && matchTech;
  });

  return (
    <div className="project-container">
      <h1 className="project-heading">My Recent Work</h1>
      <p className="project-subheading">
        Here is a list of my recent work, you can use the filters below to refine the list by project type, origin, and tech stack.
      </p>

      {/* Dropdown Filters in a row */}
      <div className="project-filters">
        <div>
          <label className="type-select" style={{ fontWeight: "bold", marginRight: "5px" }}>
            Project Type:
          </label>
          <select
            id="type-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="type-selector"
            style={{
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            {allTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="location-select" style={{ fontWeight: "bold", marginRight: "5px" }}>
            Project Origin:
          </label>
          <select
            id="location-select"
            className="type-selector"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            style={{ padding: "5px 10px", borderRadius: "5px" }}
          >
            {allLocations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="tech-select" style={{ fontWeight: "bold", marginRight: "5px" }}>
            Tech Stack:
          </label>
          <select
            id="tech-select"
            className="type-selector"
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            style={{ padding: "5px 10px", borderRadius: "5px" }}
          >
            {allTechs.map((tech, index) => (
              <option key={index} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="project-section">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            imgPath={project.imgPath}
            title={project.title}
            description={project.description}
            extra={project.extra}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
            demoPlaceholder={project.demoPlaceholder}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
