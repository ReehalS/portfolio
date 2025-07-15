import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../../data/projects.json";

function Projects() {
  // Three separate state variables for the three filter categories
  const [selectedType, setSelectedType] = React.useState("All");
  const [selectedLocation, setSelectedLocation] = React.useState("All");
  const [selectedTech, setSelectedTech] = React.useState("All");

  // Filter options for each category
  const allTypes = ["All", "Full Stack", "Machine Learning", "Mobile"]; // , "Robotics"];
  const allLocations = [
    "All",
    "Personal",
    "Club",
    "Work",
    // "Research",
    "Hackathon",
    // "Open Source",
  ];
  const allTechs = ["All", "React", "Next.js", "Python", "React-Native"]; //,"C/C++", "Java"];

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
      <h1 className="section-heading">My Recent Work</h1>
      <p className="project-subheading">
        Here is a list of my recent work, please use filters from the drop-down to refine the list by project type, origin, and tech stack.
      </p>
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
          <ProjectCard
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
