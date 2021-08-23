import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Divider } from "@chakra-ui/react";
function Footer() {
  return (
    <div>
      <div className="footer-container">
        <section className="footer">
          <Divider display="flex" />
          <div className="imput-areas">
            <div>
              <Link href="https://github.com/naldridge/Capstone-Project">
                GitHub
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
