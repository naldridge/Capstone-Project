import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { FiHome, FiSearch, FiSettings, FiMap, FiSmile } from "react-icons/fi";

import NavItem from "../components/NavItem";

export default function Sidebar() {
  const [navSize] = useState("large");
  return (
    <Flex
      position="sticky"
      top={0}
      background="#44337a"
      w={200}
      flexDirection="column"
      justifyContent="space-between"
      color="white"
    >
      <Flex p="3" flexDirection="column" as="nav">
        <NavItem navSize={navSize} icon={FiHome} title="Dashboard" />
        <NavItem navSize={navSize} icon={FiSearch} title="Explore" />
        <NavItem navSize={navSize} icon={FiMap} title="Channels" />
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" />
        <NavItem navSize={navSize} icon={FiSmile} title="About Us" />
      </Flex>
    </Flex>
  );
}
