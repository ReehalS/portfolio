import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineTool,
} from "react-icons/ai";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Nav className="navbar-buttons">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            offset={-90}
            duration={500}
            className="nav-link"
          >
            <AiOutlineHome /> Home
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            offset={-90}
            duration={500}
            className="nav-link"
          >
            <AiOutlineUser /> About
          </Link>
          <Link
            to="project"
            activeClass="active"
            spy={true}
            offset={-90}
            duration={500}
            className="nav-link"
          >
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
          <Link
            to="tools"
            activeClass="active"
            spy={true}
            offset={-90}
            duration={500}
            className="nav-link"
          >
            <AiOutlineTool /> Tools
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
