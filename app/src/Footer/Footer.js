import React from "react";

import { NavLink } from "react-router-dom";

import WhiteBorder from "../images/BorderWhite.png";
import WhiteLogo from "../images/bstar-white-logo.png";
import instagram from "../images/icons/Instagram.png";
import email from "../images/icons/email.svg";
import iphone from "../images/icons/iphone.svg";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="columns">
        <div className="footerCol">
          <p>RESERVATIONS</p>
          <div className="subtabs">
            <NavLink className="tab" to="reservations">
              Make a Reservation
            </NavLink>
          </div>
        </div>
        <div className="footerCol">
          <p>MENUS</p>
          <div className="subTabs">
            <NavLink to="brunch">Brunch Menu</NavLink>
            <NavLink to="dinner">Dinner Menu</NavLink>
          </div>
        </div>
        <div className="footerCol3">
          <img src={WhiteLogo} alt="white bstar logo"></img>
          <p>
            127 Clement Street <br></br>
            San Frnacisco CA 94118
          </p>
        </div>
        <div className="footerCol">
          <p>SERVICES</p>
          <div className="subTabs">
            <NavLink to="catering">Catering</NavLink>
            <NavLink to="group-dinning">Group Dinning</NavLink>
            <NavLink to="reusable-containers">Reusable Containers</NavLink>
          </div>
        </div>
        <div className="footerCol">
          <p>CONTACT US</p>
          <div className="subTabs">
            <div className="contactRow">
              <img src={iphone} alt="phone icon"></img>
              <span>(415) 933-9900</span>
            </div>
            <div className="contactRow">
              <img src={email} alt="email"></img>
              <span>hello@bstarbar.com</span>
            </div>
            <div className="contactRow">
              <img src={instagram} alt="instagram"></img>
              <span>
                <a href="https://www.instagram.com/bstarbar/">@bstarbar</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <img src={WhiteBorder} alt="white border"></img>
    </div>
  );
}

export default Footer;
