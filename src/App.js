import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Profile from "./components/Profile";
import "react-activity-feed/dist/index.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DisplayChannel from "./components/DisplayChannel";
import HomePage from "./components/Homepage";
import Communities from "./components/Communities";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import CreatePost from "./components/ChannelSub/CreatePosts";
import ExplorePage from "./components/ExplorePage";

function App() {
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
              <Route path={`/explore`} component={ExplorePage} />
              <Route path={`/communities`} component={Communities} />
              <Route path={`/login`} component={Login} />
              <Route path={`/channel/:slug`} component={DisplayChannel} />
              <Route path={`/createpost`} component={CreatePost} />
              <Route path={`/profile`} component={Profile} />
              <Route path={`/about`} component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
