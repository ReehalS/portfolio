import React from "react";
import {  Container} from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiFirebase
} from "react-icons/di";
import {
  SiPostgresql,
  SiNextdotjs,
  SiKotlin,
  SiAssemblyscript,
  SiMicropython,
  SiTensorflow,
  SiOpencv 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";


function Techstack() {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div className="tech-icons">
        <CgCPlusPlus />
        <p>C/C++</p>
      </div>
      <div className="tech-icons">
        <DiJava />
        <p>Java</p>
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
        <SiNextdotjs />
        <p>Next.js</p>
      </div>
      <div className="tech-icons">
        <DiPython />
        <p>Python</p>
      </div>
      <div className="tech-icons">
        <TbBrandReactNative />
        <p>React Native</p>
      </div>
      <div className="tech-icons">
        <DiMongodb />
        <p>Mongodb</p>
      </div>
      <div className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </div>
      <div className="tech-icons">
        <DiFirebase />
        <p>Firebase</p>
      </div>
      <div className="tech-icons">
        <SiKotlin />
        <p>Kotlin</p>
      </div>  
      <div className="tech-icons">
        <SiAssemblyscript />
        <p>RISC-V<strong>,</strong><br/>x86 ASM</p>
      </div>
      <div className="tech-icons">
        <SiMicropython />
        <p>MicroPython</p>
      </div>
      <div className="tech-icons">
        <SiTensorflow />
        <p>Tensorflow</p>
      </div>
      <div className="tech-icons">
        <SiOpencv />
        <p>OpenCV</p>
      </div>
      
    </Container>
);
}
export default Techstack;
