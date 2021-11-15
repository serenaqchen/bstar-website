import * as React from "react";

import { NavLink } from "react-router-dom";

import blueLogo from "../images/bstar-white-logo-blue.png";

import styles from "./styles.module.scss";

const Nav = () => {
  const [showMobileTabs, setShowMobileTabs] = React.useState(false);

  const ToggleMobileNavButton = (e) => {
    setShowMobileTabs(!showMobileTabs);
  };

  return (
    <div className={styles.topSection}>
      <div className="mobileNav">
        <NavLink className="mobileLogo" to="/" end>
          <img
            className="bstarLogoMobile"
            src={blueLogo}
            alt="Bstar Logo"
          ></img>
        </NavLink>
        <button className="icon" onClick={ToggleMobileNavButton}>
          {showMobileTabs ? "X" : <span>&#9776;</span>}
        </button>
      </div>
      <nav
        className={`${styles.nav}${showMobileTabs ? " showMobileTabs" : ""}`}
      >
        <NavLink className="tab" to="reservations">
          RESERVATIONS
        </NavLink>
        <div className="dropdown">
          <p className="dropbtn">MENUS ▾</p>
          <div className="dropdown-content">
            <NavLink className="subTab" to="brunch">
              Brunch Menu
            </NavLink>
            <NavLink className="subTab" to="dinner">
              Dinner Menu
            </NavLink>
          </div>
        </div>
        <NavLink className="activeLogo" to="/" end>
          <img className="bstarLogo" src={blueLogo} alt="Bstar Logo"></img>
        </NavLink>{" "}
        <div className="dropdown">
          <p className="dropbtn">SERVICES ▾</p>
          <div className="dropdown-content">
            <NavLink className="subTab" to="catering">
              Catering
            </NavLink>
            <NavLink className="subTab" to="group-dining">
              Group Dining
            </NavLink>
          </div>
        </div>
        <NavLink className="Tab" to="reusable-containers">
          RECYCLE
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
