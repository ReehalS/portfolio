import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <Row>
        <Col md="4" className="footer-madeby">
          <h3>Designed and Developed by Sandeep Reehal</h3>
        </Col>
        <Col md="4"className="footer-copywright" >
          <h3>Copyright © {year} SR</h3>
        </Col>
        <Col md="4" className="footer-body">
              <a
                href="https://github.com/reehals"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
        </Col>
      </Row>
    </div>

  );
}

export default Footer;