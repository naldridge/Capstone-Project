import "./App.css";
import React from "react";
import Auth0ProviderWithHistory from "./components/auth0Provider";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Auth0ProviderWithHistory>
        <div className="App">
          {/* <Form /> */}
          <LoginButton />
          <LogoutButton />
          <Profile />
        </div>
      </Auth0ProviderWithHistory>
    </>
  );
}

export default App;
