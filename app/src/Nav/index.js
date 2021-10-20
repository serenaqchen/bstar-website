import * as React from "react";

import { NavLink } from "react-router-dom";

import useAuth0 from "../auth/useAuth0";
import { Login, Logout } from "../auth/widgets";
import blueLogo from "../images/bstar-white-logo-blue.png";

import styles from "./styles.module.scss";

const Nav = () => {
  const [responsive, setResponsive] = React.useState(false);

  const handleMobileNavButton = (e) => {
    if (responsive) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  };

  console.log(responsive);
  return (
    <div>
      {!responsive && (
        <div className={styles.login}>
          <Auth />
        </div>
      )}
      <nav className={`${styles.nav}${responsive ? " responsive" : ""}`}>
        <NavLink className="mobileLogo" to="/" end>
          {/* <img className="bstarLogoMobile" src={blueLogo} alt="Bstar Logo"></img> */}
          BStar
        </NavLink>
        <NavLink className="tab" to="reservations">
          Reservations
        </NavLink>
        <div className="dropdown">
          <p className="dropbtn">Menus ▾</p>
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
          <p className="dropbtn">Services ▾</p>
          <div className="dropdown-content">
            <NavLink className="subTab" to="catering">
              Catering
            </NavLink>
            <NavLink className="subTab" to="group-dinning">
              Group Dinning
            </NavLink>
            <NavLink className="subTab" to="reusable-containers">
              Reusable Containters
            </NavLink>
          </div>
        </div>
        <NavLink className="tab" to="gift-cards">
          Gift Cards
        </NavLink>
        {responsive && <Auth />}
        <button className="icon" onClick={handleMobileNavButton}>
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
        <button className="profileButton">
          <img className="profilePic" src={user.picture} alt="" />
        </button>
        <div class="dropdown-content">
          <p>
            {user.given_name} {user.family_name}
          </p>
          <Logout />
        </div>
      </div>
    </div>
  ) : (
    <Login />
  );
};

export default Nav;
