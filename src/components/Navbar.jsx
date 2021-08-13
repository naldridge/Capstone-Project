import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  return (
    <div className="navbar">
      <Router>
        <nav>
          <a href="/" className="brand">
            <span className="brand__react">[Name]</span>
          </a>
        </nav>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/">Explore</Link>
          <Link to="/">Forums</Link>
          <Link to="/">Communities</Link>
          <input className="search" placeholder="Search" />
        </nav>
        <nav className="nav-right">
          <Link to="/">Login |</Link>
          <Link to="/"> Sign Up</Link>
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

export default Navbar;
