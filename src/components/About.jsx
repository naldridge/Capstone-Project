import React from "react";
import { Card } from "react-bootstrap";
import { Heading, Box, Text, Spacer } from "@chakra-ui/react";

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
          <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFzki1VKYlLlw/profile-displayphoto-shrink_800_800/0/1626274074391?e=1635379200&v=beta&t=eHk_Q0sn7x3cDej9MMlb7GjFa3qwv1wyokEkhOxFsTk"
            />
            <Card.Body>
              <Card.Title className="text-center">David Vasek</Card.Title>
              <Card.Text className="text-center">
                Full-Stack Developer and tech enthusiast. Based in Houston
              </Card.Text>
            </Card.Body>

            <Card.Body className="text-center">
              <Card.Link href="https://github.com/david-vasek">
                GitHub
              </Card.Link>
              <Card.Link href="https://www.linkedin.com/in/david-vasek-3b5293217/">
                Linkedin
              </Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media-exp1.licdn.com/dms/image/D4D35AQGbDnEiFqWkaA/profile-framedphoto-shrink_800_800/0/1626279144260?e=1629824400&v=beta&t=QvHGjLGIYBhqGF0y8-yo9H6LcRMKxCyua2vzFKgf8pw"
            />
            <Card.Body>
              <Card.Title className="text-center">Brittany Fisher</Card.Title>
              <Card.Text className="text-center">
                A passionate Full-Stack Developer based in Atlanta{" "}
              </Card.Text>
            </Card.Body>

            <Card.Body className="text-center">
              <Card.Link href="https://github.com/brittany-fisher21">
                GitHub
              </Card.Link>
              <Card.Link href="https://www.linkedin.com/in/brittanybfisher/">
                Linkedin
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="cardContainer1">
          <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media-exp1.licdn.com/dms/image/D4D35AQFnvJxbPuvE7g/profile-framedphoto-shrink_800_800/0/1626276517779?e=1629824400&v=beta&t=d3aieomMOVAqAUzkAy0zSfA6ugwP0LZqTtre7BcEfFQ"
            />
            <Card.Body>
              <Card.Title className="text-center">Nick Aldridge</Card.Title>
              <Card.Text className="text-center">
                I'm a developer currently studying in the DigitalCrafts
                Full-Stack Developer Bootcamp
              </Card.Text>
            </Card.Body>

            <Card.Body className="text-center">
              <Card.Link href="https://github.com/naldridge">GitHub</Card.Link>
              <Card.Link href="https://www.linkedin.com/in/nicholas-aldridge-177479145/">
                Linkedin
              </Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", height: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://media-exp1.licdn.com/dms/image/C5603AQFNfZxe3hpG4g/profile-displayphoto-shrink_800_800/0/1629498856340?e=1635379200&v=beta&t=ruBCNhihj4YtfrWCbFRy2JY050hrnc4lqp6AJgq5lyk"
            />
            <Card.Body>
              <Card.Title className="text-center">
                Immanuel Alexander
              </Card.Title>
              <Card.Text className="text-center">
                Full stack web developer starting a career in JS development.
                Follow my journey line for line
              </Card.Text>
            </Card.Body>

            <Card.Body className="text-center">
              <Card.Link href="https://github.com/1immanuel">GitHub</Card.Link>
              <Card.Link href="https://www.linkedin.com/in/1immanuel/">
                Linkedin
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
