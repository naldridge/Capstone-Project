import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Heading, Box, Text, Button, Spacer, Divider } from "@chakra-ui/react";
import Footer from "./Footer";

const DefaultChannelsList = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    (async () => {
      const url = "http://localhost:3333/channel/default";
      const response = await fetch(url).then((response) => response.json());
      const channels = response;
      setChannels(channels);
    })();
  }, [setChannels])
 
  return (
    <div className="defaultChannelsList">
      {channels.map((channel, index) => (
        <div classname="defaultChannel" key={index}>
          <Card.Link href={`/channel/${channel.slug}`}>{channel.channel_name}</Card.Link>
        </div>
      ))}
    </div>
  )
}

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
            href="https://dev-ezawyn6e.us.auth0.com/u/signup?state=hKFo2SBsemIxY0VKa2p3UnpqWEwxWE83ZDJ1LUN1LVhfX3FOMqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIE1yTDlFUFo2Zm5EeXVRcHdtYmdJRG9XVmJKd09yR2NUo2NpZNkgVFZrZ3ZBMUhWREFLazZkNWlsdjBGTjJQamU0ZVFvTmk"
          >
            Create a free account
          </Button>
        </Box>
        <Spacer />
        <div className="cardContainer">
          <Card className="signUpCard" style={{ width: "30rem" }}>
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
          <Card className="signUpCard" style={{ width: "30rem" }}>
            <Card.Body className="text-center">
              <Card.Title>
                Check out some of these featured communities!
              </Card.Title>
              <DefaultChannelsList />
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
