import React from "react";
import { Flex, Text, Icon, Link, Menu, MenuButton } from "@chakra-ui/react";

export default function NavItem({ icon, title, active, navSize }) {
  return (
    <Flex mt={30} flexDirection="column" w="100%">
      <Menu>
        <Link p={5} borderRadius={3} _hover={{ backgroundColor: "#9F7AEA" }}>
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" color="white" />
              <Text ml={5}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
