import React from "react";

import { NavLink } from "react-router-dom";

import WhiteBorder from "../images/BorderWhite.png";
import WhiteLogo from "../images/bstar-white-logo.png";
import instagram from "../images/icons/Instagram.svg";
import email from "../images/icons/email.svg";
import iphone from "../images/icons/iphone.svg";

import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="columns">
        <div className="footerCol1">
          <p>RESERVATIONS</p>
          <ul className="subtabs">
            <li>
              <NavLink className="tab" to="reservations">
                Make a Reservation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footerCol2">
          <p>MENUS</p>
          <ul className="subTabs">
            <li>
              <NavLink to="brunch">Brunch Menu</NavLink>
            </li>
            <li>
              <NavLink to="dinner">Dinner Menu</NavLink>
            </li>
          </ul>
        </div>
        <div className="footerCol3">
          <img src={WhiteLogo} alt="white bstar logo"></img>
          <p>
            127 Clement Street <br></br>
            San Frnacisco CA 94118 <br></br>
            (415) 933-9900
          </p>
        </div>
        <div className="footerCol4">
          <p>SERVICES</p>
          <ul className="subTabs">
            <li>
              <NavLink to="catering">Catering</NavLink>
            </li>
            <li>
              <NavLink to="group-dinning">Group Dinning</NavLink>
            </li>
            <li>
              <NavLink to="reusable-containers">Reusable Containers</NavLink>
            </li>
          </ul>
        </div>
        <div className="footerCol5">
          <p>CONTACT US</p>
          <ul className="subTabs">
            <li className="contactRow">
              <img src={iphone} alt="phone icon"></img>
              <span>(415) 933-9900</span>
            </li>
            <li className="contactRow">
              <img src={email} alt="email"></img>
              <span>hello@bstarbar.com</span>
            </li>
            <li className="contactRow">
              <img src={instagram} alt="instagram"></img>
              <span>
                <a href="https://www.instagram.com/bstarbar/">@bstarbar</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <img src={WhiteBorder} alt="white border"></img>
    </div>
  );
}

export default Footer;
