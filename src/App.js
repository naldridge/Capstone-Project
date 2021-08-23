import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
// import Auth0Provider from "./components/auth0Provider";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import "react-activity-feed/dist/index.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DisplayChannel from "./components/DisplayChannel";
import HomePage from "./components/Homepage";
import Communities from "./components/Communities";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  /*  const { isLoading } = useAuth0();
  const stream = React.Component;

  if (isLoading) return <div>Loading...</div>; */

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <div className="sideBar">
            <Sidebar channel={null} />
          </div>
          <div className="mainContainer">
            <Switch>
              <Route exact path={`/`} component={HomePage} />
              <Route path={`/communities`} component={Communities} />
              <Route path={`/login`} component={Login} />
              <Route path={`/channel/:slug`} component={DisplayChannel} />
              <Route path={`/profile`} component={Profile} />
              <Route path={`/about`} component={About} />
            </Switch>
          </div>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
