import React from "react";
import { Card } from "react-bootstrap";
import { Heading, Box, Text, Button, Spacer } from "@chakra-ui/react";
import { Height } from "@material-ui/icons";

const About = () => {
  return (
    <div className="homePage">
      <div className="homeMainContent">
        <Box maxW="40rem" ml={220}>
          <Heading mb={4} ml={120} fontSize="4xl">
            Check Out The Team
          </Heading>
          <Text fontSize="xl" ml={-10}>
            fetch-dev() was our Capstone project for DigitalCrafts web
            development bootcamp. The project showcased our knowlegde of the
            different programming langues we learned throughout the bootcamp.
            The app was created with React and we implemented other various
            language snippits throughout.
          </Text>
        </Box>
        <Spacer />
        <div className="cardContainer">
          <Card className="signUpCard" style={{ width: "30rem" }}>
            <Card.Body className="text-center">
              <Card.Title>David Vasek</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card
            className="signUpCard"
            style={{ width: "30rem", height: "20rem" }}
          >
            <Card.Body className="text-center">
              <Card.Title>
                Check out some of these featured communities!
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="cardContainer">
          <Card
            className="signUpCard"
            style={{ width: "30rem", height: "20rem" }}
          >
            <Card.Body className="text-center">
              <Card.Title>Communities</Card.Title>

              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          <Card className="signUpCard" style={{ width: "30rem" }}>
            <Card.Body className="text-center">
              <Card.Title>
                Check out some of these featured communities!
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
