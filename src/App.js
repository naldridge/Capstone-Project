import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Community } from "./pages/Community";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Home } from "./pages/Home";
import { DarkMode } from "./pages/DarkMode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/community" component={Community} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/darkmode" component={DarkMode} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
