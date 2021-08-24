import Nav from "react-bootstrap/Nav";
import { Flex, Heading, Spacer, Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Flex p="5">
      <Box p="2">
        <Heading size="xl" ml="12">
          fetch-dev()
        </Heading>
      </Box>
      <Spacer />

      <Box>
        <Nav className="justify-content-end">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Nav>
      </Box>
    </Flex>
  );
};

export default Navbar;
