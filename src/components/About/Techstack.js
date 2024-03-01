import React from "react";
import {  Container} from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div className="tech-icons">
        <CgCPlusPlus />
        <p>C/C++</p>
      </div>
      <div className="tech-icons">
        <DiJavascript1 />
        <p>Javascript</p>
      </div>
      <div className="tech-icons">
        <DiNodejs />
        <p>Node.js</p>
      </div>
      <div className="tech-icons">
        <DiReact />
        <p>React</p>
      </div>
      <div className="tech-icons">
        <DiPython />
        <p>Python</p>
      </div>
      <div className="tech-icons">
        <DiMongodb />
        <p>Mongodb</p>
      </div>
      <div className="tech-icons">
        <DiGit />
        <p>Git</p>
      </div>      
      <div className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </div>
      
    </Container>
);
}
export default Techstack;
