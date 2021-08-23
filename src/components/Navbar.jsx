import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import { Flex, Heading, Spacer, Box, Button } from "@chakra-ui/react";
import { FiSun } from "react-icons/fi";
import NavItem from "./NavItem";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Flex p="5">
      <Box p="2">
        {/* <div class="loader">
          <div class="loader-logo">
            <img src="data:image/png;base64,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" />
          </div>
        </div> */}
        <Heading size="xl" ml="12">
          fetch-dev()
        </Heading>
      </Box>
      <Spacer />

      <Box>
        <Nav className="justify-content-end">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
        {/* <Button
          size="md"
          height="45px"
          width="90px"
          border="4px"
          borderColor="#718096"
          color="white"
          mr="5"
        >
          Sign Up
        </Button>
        <Button
          size="md"
          height="45px"
          width="90px"
          border="4px"
          borderColor="#718096"
          color="white"
          mr="4"
        >
          Login
        </Button> */}
      </Box>
    </Flex>
  );
};

export default Navbar;
