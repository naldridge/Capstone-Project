import React from "react";
import { Flex, Text, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";

export default function NavItem({ icon, title, NavSpot }) {
  return (
    <Flex mt={38} flexDir="column" w="100%">
      <Menu placement="right">
        <Link
          href={NavSpot}
          p={2}
          borderRadius={10}
          _hover={{ textDecor: "none", backgroundColor: "#718096" }}
          w="100%"
        >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" />
              <Text ml={3} display="flex">
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
