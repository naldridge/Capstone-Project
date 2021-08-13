import React, { useState } from "react";

import { Link } from "react-router-dom";
import { SidebarNavData } from "./SidebarNavData";
import "../App.css";
import { IconContext } from "react-icons";

function SidebarNav() {
  const [sidebar] = useState(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            {SidebarNavData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SidebarNav;