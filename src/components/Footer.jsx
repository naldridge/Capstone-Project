import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer">
        <div className="imput-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
          </form>
          <div>
            <Link>About the Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
