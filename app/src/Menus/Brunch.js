import React from "react";

import Button from "../components/Button";
import WhiteBorder from "../images/border-style-white.png";
import PorkTocino from "../images/pork-tocino.jpeg";

import styles from "./styles.module.scss";

function Brunch() {
  return (
    <div className={styles.menu}>
      <div className="imageOverlay">
        <img src={PorkTocino} alt="Pork Tocino"></img>
      </div>
      <div className="title">
        <img src={WhiteBorder} alt="white border"></img>
        <h1>Brunch Menu</h1>
        <img src={WhiteBorder} alt="white border"></img>
      </div>
      <Button text="Hello" />
    </div>
  );
}

export default Brunch;
