import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">
            <AiOutlineHome /> Home
          </Link>
          <Link to="/about" className="nav-link">
            <AiOutlineUser /> About
          </Link>
          <Link to="/project" className="nav-link">
            <AiOutlineFundProjectionScreen /> Projects
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;