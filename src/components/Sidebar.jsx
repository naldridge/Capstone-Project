import React, { useState } from "react";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "./NavItem";
import DisplayChannel from "./DisplayChannel";

function showDefaultChannels() {
  const { channel } = this.props;

  return (
    <ul className="defaultChannelsList">
      <Router>
      {
        channel.map((data, index) => {
          return (<li key={index}>
            <Link to={`/channel/${data.slug}`}>{data.name}</Link>
          </li>)
        })
      }
        <Switch>
          <Route path={`/channel/:${data.slug}`}>
            <DisplayChannel />
          </Route>
        </Switch>
      </Router>
    </ul>
  )
}

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="5"
      h="70vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="80%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
        />
        <NavItem navSize={navSize} icon={FiCalendar} title="Explore" active />
        <NavItem navSize={navSize} icon={FiUser} title="Communities">
          {showDefaultChannels()}
        </NavItem>
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              David Vasek
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
