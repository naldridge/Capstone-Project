import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <button className="loginButton" onClick={() => loginWithPopup()}>
      Log In
    </button>
  );
};

export default Login;
