import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import { Flex, Heading, Spacer, Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    // <div className="navbar">
    //   <Router>
    //     <div className="leftNav">
    //       <Nav className="justify-content-start" activeKey="/home">
    //         <Nav.Item>
    //           <Nav.Link href="/home">[ NAME ]</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </div>
    //     <div className="centerNav">
    //       <Nav className="justify-content-center" activeKey="/home">
    //         <Nav.Item>
    //           <Nav.Link href="/home">Explore</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="link-1">Forums</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="link-2">Communities</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </div>
    //     <div className="rightNav">
    //       <Nav className="justify-content-end" activeKey="/home">
    //         <Nav.Item>
    //           <Nav.Link href="/home">Log In</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="link-1">Sign Up</Nav.Link>
    //         </Nav.Item>
    //         <Nav.Item>
    //           <Nav.Link eventKey="link-2">About The Team</Nav.Link>
    //         </Nav.Item>
    //       </Nav>
    //     </div>
    //     <Switch>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    //   </Router>
    // </div>
    <Flex p="2">
      <Box p="4">
        <Heading size="md" ml="8">
          fetch-dev()
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="purple" mr="5">
          Sign Up
        </Button>
        <Button colorScheme="purple" mr="4">
          Log in
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
