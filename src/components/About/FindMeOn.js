import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import { Col } from 'react-bootstrap';

function FindMeOn() {
  return (
    <div className="about-social">
      <Col md={12}>
        <h1 className="section-heading">Find Me On</h1>
        <ul className="about-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/reehals"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
        
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/sandeep-reehal/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://devpost.com/sreehal"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <SiDevpost />
            </a>
          </li>
        </ul>
      </Col>
    </div>
  );
}

export default FindMeOn;
