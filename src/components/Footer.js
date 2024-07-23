import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col md="4" className="footer-madeby">
          <h3>Made by Sandeep Reehal</h3>
        </Col>
        <Col md="4"className="footer-copywright" >
        </Col>
        <Col md="4" className="footer-body">
              <a
                href="https://github.com/reehals"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub className="footer-icons"/>
              </a>
        </Col>
      </Row>
    </div>

  );
}

export default Footer;