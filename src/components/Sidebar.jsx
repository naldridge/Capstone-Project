import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Divider, Heading } from "@chakra-ui/react";
import { FiHome, FiUser, FiSunrise, FiStar, FiBookOpen } from "react-icons/fi";
import NavItem from "./NavItem";
import HomePage from "./Homepage";

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

  return (
    <Flex
      pos="sticky"
      left="1"
      h="70vh"
      marginTop="2.5vh"
      w="200px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" w="80%" as="nav">
        <NavItem NavSpot="/" icon={FiHome} title="Dashboard">
          {props.channel !== null ? showDefaultChannels(props.channel) : null}
        </NavItem>

        <NavItem NavSpot="/explore" icon={FiSunrise} title="Explore" />
        <NavItem
          NavSpot="communities"
          icon={FiBookOpen}
          title="Communities"
        ></NavItem>
        <NavItem NavSpot="/about" icon={FiStar} title="About" />
      </Flex>

      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={10}>
        <Divider display="flex" />
        <Flex mt={1} align="center">
          <Flex flexDir="column" ml={0} display="flex">
            <Heading as="h3" size="sm">
              <NavItem icon={FiUser} title="Profile" NavSpot="/profile" />
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
