import React from "react";

import WhiteBorder from "../images/border-style-white.png";

import styles from "./styles.module.scss";

function BstarTitle({ title, showTitle }) {
  return (
    <div className={styles.BstarTitle}>
      <div className="imageOverlay">
        <div className={title}>
          {showTitle === "true" && (
            <div className="title">
              <img
                className="title--border"
                src={WhiteBorder}
                alt="white border"
              ></img>
              <h1>{title}</h1>
              <img
                className="title--border"
                src={WhiteBorder}
                alt="white border"
              ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BstarTitle;
