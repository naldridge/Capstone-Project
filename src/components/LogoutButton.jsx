import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() => logout()}
      size="md"
      height="40px"
      width="90px"
      border="4px"
      borderColor="#718096"
      color="white"
      mr="5"
    >
      Log out
    </Button>
  );
};

export default LogoutButton;
