import React from "react";
import { Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";


function Type() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Software Developer",
          "Full Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

function Home() {
  return (
    <div className="home-content">
      <Col md={7} className="home-header">
        <h1  className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="heading-name">
          I'm
          <strong className="main-name"> Sandeep Reehal</strong>
        </h1>
        <div  className="typewriterEffect" >
          <Type/>
        </div>
      </Col>
    </div>
  );
}

export default Home;