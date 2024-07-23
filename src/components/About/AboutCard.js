import React from "react";

function AboutCard() {
  return (
    <div className="about-about-section">
      <div>
      <h1 style={{paddingBottom: "10px"}}> 
      About Me
      </h1>
        <blockquote >
          <p className="about-text" >
            I am a Computer Science and Engineering Student at UC Davis who is passionate about <strong className="blue">Machine Learning and Web development. </strong>
            <br />
            I am a quick learner and a team player who is always looking for new challenges and opportunities to grow. 
            <br />
            <br />I am fluent in languages like
            <strong className="blue"> C++, Java, Javascript, and Python </strong>
            ,              
            <br /> And frameworks like
            <strong className="blue"> React.js, Node.js, React Native, and Express.js</strong>
            .
            <br />
            <br />
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;
