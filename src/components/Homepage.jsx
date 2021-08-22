import { Card } from "react-bootstrap";
import React from "react";
import { Heading, Box, Text, Button, Spacer } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homeMainContent">
        <Box maxW="40rem" ml={220}>
          <Heading mb={4} ml={100} fontSize="4xl">
            Welcome to fetch-dev()
          </Heading>
          <Text fontSize="xl" ml={-10}>
            Browse through our communities to find all the information you need.
            Discover new topics, programming languages, and more at the click of
            a button!
          </Text>
          <Button
            size="lg"
            height="45px"
            width="200px"
            border="4px"
            borderColor="#718096"
            color="white"
            mr="5"
            ml={200}
            mt={10}
          >
            Create a free account
          </Button>
        </Box>
        <Spacer />
        <div className="cardContainer">
          <Card className="signUpCard" style={{ width: "30rem" }}>
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

export default HomePage;
