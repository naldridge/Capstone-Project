import "./App.css";
import React from "react";
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
