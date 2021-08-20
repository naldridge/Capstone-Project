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

import ProfilePage from "./components/ProfilePage";
// import HomePage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Community } from "./pages/Community";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { DarkMode } from "./pages/DarkMode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";


function App() {
 /*  const { isLoading } = useAuth0();
  const stream = React.Component;

  if (isLoading) return <div>Loading...</div>; */

  return (
    <div className="App">
      <Navbar />

      <ProfilePage />

      {/* <Sidebar />
      <ProfilePage /> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
