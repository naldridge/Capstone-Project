import { Card } from "react-bootstrap";
import React from "react";
import { Heading, Box, Text, Button, Spacer, Divider } from "@chakra-ui/react";
import Footer from "./Footer";
import SignUpButton from "./SignUpButton";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homeMainContent">
        <Box maxW="40rem" ml={200}>
          <Heading mb={4} ml={100} fontSize="4xl">
            Welcome to fetch-dev()
          </Heading>
          <Text fontSize="xl" ml={-10} textAlign="center">
            Browse through our communities to find all the information you need.
            Discover new topics and more at the click of a button!
          </Text>
          <SignUpButton />
        </Box>
        <Spacer />
        <div className="cardContainer2">
          <Card className="signUpCard" style={{ width: "20rem" }}>
            <Card.Body className="text-center">
              <Card.Title>Communities</Card.Title>

              <Card.Subtitle className="mb-2 text">
                Browse through different communities that spark your interest.
                Not finding a specific community? Create your own community and
                other like-minded people can join and contribute!
              </Card.Subtitle>

              <Card.Link href="/communities active"></Card.Link>
            </Card.Body>
          </Card>
          <Card className="signUpCard" style={{ width: "20rem" }}>
            <Card.Body className="text-center">
              <Card.Title>
                Check out some of these featured communities!
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
