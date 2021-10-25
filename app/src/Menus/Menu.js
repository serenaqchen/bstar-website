import React from "react";

import WhiteBorder from "../images/border-style-white.png";

import FilterSection from "./FilterSection";
import styles from "./styles.module.scss";

function Menu({ type }) {
  return (
    <div className={styles.menu}>
      <div className="imageOverlay">
        <div className="background">
          <div className="title">
            <img src={WhiteBorder} alt="white border"></img>
            <h1>{type} Menu</h1>
            <img src={WhiteBorder} alt="white border"></img>
          </div>
        </div>
      </div>
      <FilterSection />
    </div>
  );
}

export default Menu;
