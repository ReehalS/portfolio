import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
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
            duration={500}
            className="nav-link"
          >
            <AiOutlineHome /> Home
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            duration={500}
            className="nav-link"
          >
            <AiOutlineUser /> About
          </Link>
          <Link
            to="project"
            activeClass="active"
            spy={true}
            duration={500}
            className="nav-link"
          >
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
