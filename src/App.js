import "./App.css";
import React from "react";
// import Auth0ProviderWithHistory from "./components/auth0Provider";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {/* <Auth0ProviderWithHistory> */}
      <div className="App">
        <LoginButton />
        <LogoutButton />
        <Profile />
      </div>
      {/* </Auth0ProviderWithHistory> */}
    </>
  );
}

export default App;
