import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Divider, Heading } from "@chakra-ui/react";
import { FiHome, FiUser, FiSunrise } from "react-icons/fi";
import NavItem from "./NavItem";

function showDefaultChannels(channel) {
  return (
    <ul className="defaultChannelsList">
      {channel.map((data, index) => {
        return (
          <li key={index}>
            <Link to={`/channel/${data.slug}`}>{data.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar(props) {
  console.log(props);
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="1"
      h="70vh"
      marginTop="2.5vh"
      // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="80%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        as="nav"
      >
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description="This is the description for the dashboard."
        >
          {props.channel !== null ? showDefaultChannels(props.channel) : null}
        </NavItem>

        <NavItem navSize={navSize} icon={FiSunrise} title="Explore" />
        <NavItem navSize={navSize} icon={FiUser} title="Communities"></NavItem>
        <NavItem navSize={navSize} icon={FiUser} title="Profile" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={1} align="center">
          <Flex
            flexDir="column"
            ml={6}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              <NavItem navSize={navSize} icon={FiUser} title="Profile" />
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
