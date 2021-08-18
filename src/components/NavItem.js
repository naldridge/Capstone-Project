import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

export default function NavItem({ icon, title, active, navSize }) {
  return (
    <Flex mt={30} flexDir="column" w="100%">
      <Menu placement="right">
        <Link
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#9F7AEA" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "#2D3748" : "gray.500"}
              />
              <Text ml={5}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}></MenuList>
      </Menu>
    </Flex>
  );
}
