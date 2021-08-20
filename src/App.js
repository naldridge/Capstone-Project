import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import React from "react";
// import Auth0ProviderWithHistory from "./components/auth0Provider";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import {
  StreamApp,
  NotificationDropdown,
  FlatFeed,
  Activity,
  LikeButton,
} from "react-activity-feed";
import "react-activity-feed/dist/index.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DisplayChannel from "./components/DisplayChannel";
// import HomePage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
 /*  const { isLoading } = useAuth0();
  const stream = React.Component;

  if (isLoading) return <div>Loading...</div>; */

  return (
    <div>
      <StreamApp
        apiKey="dz5f4d5kzrue"
        appId="102254"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZHJ5LXZvaWNlLTQiLCJleHAiOjE2MjkzMTYxMzJ9.kdE2XExoVYvuT66HOrnH2muPCwfd2vWg0CxkQWs4qsw"
      >
        <NotificationDropdown notify />
        <FlatFeed
          notify
          Activity={(props) => (
            <Activity
              {...props}
              Footer={() => (
                <div style={{ padding: "8px 16px" }}>
                  <LikeButton {...props} />
                </div>
              )}
            />
          )}
        />
      </StreamApp>

      {/* <Auth0ProviderWithHistory> */}
      <div className="App">
        <LoginButton />
        <LogoutButton />
        <Profile />
      </div>
      {/* </Auth0ProviderWithHistory> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path={`/channel/:slug`}>
            <DisplayChannel />
          </Route>
        </Switch>
      </Router>

      <Sidebar channel={null} />


      {/* <HomePage /> */}
    </div>
  );
}

export default App;
