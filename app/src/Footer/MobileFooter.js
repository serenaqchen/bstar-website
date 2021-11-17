import React from "react";

import WhiteLogo from "../images/bstar-white-logo.png";

import styles from "./styles.module.scss";

function MobileFooter() {
  return (
    <div className={styles.mobileFooter}>
      <div className="footerCol3">
        <img src={WhiteLogo} alt="white bstar logo"></img>
      </div>
    </div>
  );
}

export default MobileFooter;
