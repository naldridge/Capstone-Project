import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #44337a;
    z-index: 1;
    height: 75px;
    width: 100%;
    position: fixed;
    top: 0;
    overflow: hidden;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: black;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    padding: 30px;
    font-size: 2.25em;
    color: black;
    &:hover {
      color: white;
    }
  }
  .form-center {
    position: absolute !important;
    left: 85%;
    right: 5%;
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">FETCH-DEV()</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>

      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>{" "}
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/darkMode">Dark Mode</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/community">Community</Nav.Link>
        </Nav.Item>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="primary">Primary</Button>
      </Nav>
    </Navbar>
  </Styles>
);

export default NavBar;
