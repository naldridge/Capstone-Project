import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      size="md"
      height="40px"
      width="90px"
      border="4px"
      borderColor="#718096"
      color="white"
      mr="5"
    >
      Log In
    </Button>
  );
};

export default LoginButton;
