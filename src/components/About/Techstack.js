import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiPostgresql,
  SiNextdotjs,
  SiKotlin,
  SiAssemblyscript,
  SiMicropython,
  SiTensorflow,
  SiOpencv,
  SiFirebase
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNode } from "react-icons/fa";

function Techstack() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <div className="tech-icons">
        <CgCPlusPlus size={72} className="icon" />
        <p>C/C++</p>
      </div>
      <div className="tech-icons">
        <DiJava size={72} className="icon" />
        <p>Java</p>
      </div>
      <div className="tech-icons">
        <DiJavascript1 size={72} className="icon" />
        <p>Javascript</p>
      </div>
      <div className="tech-icons">
        <DiPython size={72} className="icon" />
        <p>Python</p>
      </div>
      <div className="tech-icons">
        <SiKotlin size={72} className="icon" />
        <p>Kotlin</p>
      </div>  
      <div className="tech-icons">
        <SiAssemblyscript size={72} className="icon" />
        <p>RISC-V, x86 ASM</p>
      </div>
      <div className="tech-icons">
        <FaNode size={72} className="icon" />
        <p>Node.js</p>
      </div>
      <div className="tech-icons">
        <DiReact size={72} className="icon" />
        <p>React</p>
      </div>
      <div className="tech-icons">
        <SiNextdotjs size={72} className="icon" />
        <p>Next.js</p>
      </div>
      <div className="tech-icons">
        <TbBrandReactNative size={72} className="icon" />
        <p>React Native</p>
      </div>
      <div className="tech-icons">
        <DiMongodb size={72} className="icon" />
        <p>Mongodb</p>
      </div>
      <div className="tech-icons">
        <SiPostgresql size={72} className="icon" />
        <p>PostgreSQL</p>
      </div>
      <div className="tech-icons">
        <SiFirebase size={72} className="icon" />
        <p>Firebase</p>
      </div>
      <div className="tech-icons">
        <SiMicropython size={72} className="icon" />
        <p>MicroPython</p>
      </div>
      <div className="tech-icons">
        <SiTensorflow size={72} className="icon" />
        <p>Tensorflow</p>
      </div>
      <div className="tech-icons">
        <SiOpencv size={72} className="icon" />
        <p>OpenCV</p>
      </div>
    </div>
  );
}

export default Techstack;
