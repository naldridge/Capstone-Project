import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import { Flex, Heading, Spacer, Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p="3" position="sticky" className="headerNav">
      <Box p="4">
        <Heading size="md" ml="7" color="white">
          fetch-dev()
        </Heading>
      </Box>

      <Spacer />

      <Box>
        <Button mr="5">Sign Up</Button>
        <Button mr="5" p="5">
          Log in
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
