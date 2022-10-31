import React, { useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Mylogo from "../assets/Mylogo.svg";
import Autocomplete from "./Autocomplete";

const NavbarContainer = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="justify-space-between">
        <Nav className="d-flex align-items-center justify-space-around">
          <Navbar.Brand href="/">
            <img className="bg-dark rounded" src={Mylogo} alt="logo" />
          </Navbar.Brand>
          <label className="m-3">
           <Autocomplete/>
          </label>
        </Nav>

        <Nav className="flex-nowrap">
          <Nav.Link href="/aboutme">Aboutme</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
