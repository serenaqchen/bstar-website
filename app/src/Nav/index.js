import * as React from "react";

import { NavLink } from "react-router-dom";

import useAuth0 from "../auth/useAuth0";
import { Login, Logout } from "../auth/widgets";
import blueLogo from "../images/bstar-white-logo-blue.png";

import styles from "./styles.module.scss";

const Nav = () => {
  const [showMobileTabs, setShowMobileTabs] = React.useState(false);

  const ToggleMobileNavButton = (e) => {
    setShowMobileTabs(!showMobileTabs);
  };

  return (
    <div className={styles.topSection}>
      {!showMobileTabs && (
        <div className={styles.login}>
          <Auth />
        </div>
      )}
      <nav
        className={`${styles.nav}${showMobileTabs ? " showMobileTabs" : ""}`}
      >
        <NavLink className="mobileLogo" to="/" end>
          <img
            className="bstarLogoMobile"
            src={blueLogo}
            alt="Bstar Logo"
          ></img>
          {/* BStar */}
        </NavLink>
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
            <NavLink className="subTab" to="group-dinning">
              Group Dinning
            </NavLink>
            <NavLink className="subTab" to="reusable-containers">
              Reusable Containers
            </NavLink>
          </div>
        </div>
        <NavLink className="tab" to="gift-cards">
          GIFT CARDS
        </NavLink>
        <div className="auth">
          <Auth />
        </div>
        <button className="icon" onClick={ToggleMobileNavButton}>
          &#9776;
        </button>
      </nav>
    </div>
  );
};

const Auth = () => {
  const { isAuthenticated, user } = useAuth0();

  return isAuthenticated ? (
    <div className={styles.login}>
      <div class="dropdown">
        <img
          className="profilePic"
          src={user.picture}
          alt="User profile picture"
        />
        <button className="profileButton">{user.given_name}</button>
        <div class="dropdown-content">
          {/* <p>
            {user.given_name} {user.family_name}
          </p> */}
          <div className="logoutButton">
            <Logout />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  );
};

export default Nav;
