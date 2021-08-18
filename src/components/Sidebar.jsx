import React, { useState } from "react";
import { Flex, Divider, Avatar, Heading } from "@chakra-ui/react";
import { FiHome, FiSearch, FiSettings, FiMap, FiSmile } from "react-icons/fi";

import NavItem from "../components/NavItem";

export default function Sidebar() {
  const [navSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="2"
      h="85vh"
      background="#44337A"
      marginTop="2vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.2)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      color="white"
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
        <NavItem navSize={navSize} icon={FiSearch} title="Explore" />
        <NavItem navSize={navSize} icon={FiMap} title="Channels" />
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
        <NavItem navSize={navSize} icon={FiSmile} title="About Us" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
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
