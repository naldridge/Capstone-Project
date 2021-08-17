import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";
import Channel from "./pages/Channel";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            DevHacks
          </Link>
          <div className="menu-icon" onClick={handleClick}></div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav=links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="./components/pages/Channel"
              className="nav=links"
              onClick={closeMobileMenu}
            >
              Channel
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav=links" onClick={closeMobileMenu}>
              About the Team
            </Link>
          </li>
        </ul>
        <Button>Sign Up</Button>
      </nav>
    </>
  );
}

export default Navbar;
