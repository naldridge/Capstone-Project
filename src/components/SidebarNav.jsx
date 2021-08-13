import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

const SidebarNav = () => {
  return (
    <div className="sidebarNav">
      <Router>
        <nav className="sideNav">
          <div className="side-menu-items">
            <Link to="/">Home</Link>
            <Link to="/">Explore</Link>
            <Link to="/">Forums</Link>
            <Link to="/">Communities</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default SidebarNav;
