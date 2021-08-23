import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const SignUpButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      size="lg"
      height="45px"
      width="200px"
      border="4px"
      borderColor="#718096"
      color="white"
      mr="5"
      ml={200}
      mt={10}
    >
      Create a free account
    </Button>
  );
};

export default SignUpButton;
