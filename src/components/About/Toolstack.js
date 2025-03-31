import React from "react";
import {
  SiPostman,
  SiSlack,
  SiFigma,
  SiTermius, 
  SiGithub
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div className="tech-icons">
        <VscVscode size={72} className="icon"/>
        <p>VS Code</p>
      </div>
      <div className="tech-icons">
        <SiGithub size={72} className="icon"/>
        <p>GitHub</p>
      </div>
      <div className="tech-icons">
        <SiPostman size={72} className="icon"/>
        <p>Postman</p>
      </div>
      <div className="tech-icons">
        <SiSlack size={72} className="icon"/>
        <p>Slack</p>
      </div>
      <div className="tech-icons">
        <SiFigma size={72} className="icon"/>
        <p>Figma</p>
      </div>
      <div className="tech-icons">
        <SiTermius size={72} className="icon"/>
        <p>Termius</p>
      </div>
      
    </div>
  );
}

export default Toolstack;
