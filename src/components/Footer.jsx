import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <section className="footer">
          <div className="imput-areas">
            <a
              href="https://github.com/naldridge/Capstone-Project"
              target="_blank"
            >
              <FiGithub size="50" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
