import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
import { Container, Row, Col, Card, Button, Navbar } from "react-bootstrap";
// import Navbar from "./Navbar";

const SplashPage = () => {
  return (
    <>
      <div>
        <Container className="nav-header">
          <Navbar expand="lg" variant="light" bg="light">
            <Container>
              <Navbar.Brand href="#">[NAME]</Navbar.Brand>
              <Navbar.Brand href="#">Explore</Navbar.Brand>
              <Navbar.Brand href="#" className="justify-content-end">
                Sign In
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </div>
      <div className="splashMainContainer">
        <Container fluid className="welcomeText">
          <Row>
            <Col>
              <h2>Welcome to ____!</h2>
              <h4>The Web Developer's Community</h4>
            </Col>
          </Row>
        </Container>
        <Container className="bodyContainer">
          <Row>
            <Col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quis
              est! Minima molestiae pariatur nisi iure voluptates expedita
              provident quasi ipsum, aut ipsam velit, dolores odit quas, porro
              facilis itaque?
            </Col>
            <Col>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              libero nulla ipsa molestias. Iure provident recusandae
              accusantium. Aut, sapiente modi? Quos quidem, quasi asperiores
              delectus voluptatem impedit.
            </Col>
          </Row>
          <Row>
            <Col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              architecto esse recusandae perspiciatis veritatis hic, natus,
              aliquam rerum itaque voluptatem totam deleniti officiis maiores
              quo vel fuga corporis cumque earum!
            </Col>
            <Col>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati, dicta odio? Placeat quo dolorem porro, corporis laborum
              mollitia quibusdam. Quia ipsum, totam voluptas similique quod
              fuga! Quos suscipit repellat eaque!
            </Col>
            <Col>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              voluptas pariatur debitis amet, est quis impedit nisi mollitia
              inventore eligendi accusantium rem animi ipsum quo quaerat
              officiis, ab assumenda quidem.
            </Col>
          </Row>
        </Container>
        <Container className="signUp">
          <Card className="text-center">
            <Card.Body className="signUpCard">
              <Card.Title>Create An Account Now</Card.Title>
              <Card.Text>
                To begin exploring all that [NAME] has to offer developement
                wise
              </Card.Text>
              <Button variant="primary">Sign Up</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <footer>
        <div className="footer">
          <Card>
            <Card.Body>
              <Card.Title>2021 [NAME]</Card.Title>
              <Card.Text>Contact Us</Card.Text>
              <Button variant="primary" type="submit">
                Go somewhere
              </Button>{" "}
              <Button variant="primary">Go somewhere</Button>{" "}
              <Button variant="primary">Go somewhere</Button>{" "}
            </Card.Body>
          </Card>
        </div>
      </footer>
    </>
  );
};

export default SplashPage;
