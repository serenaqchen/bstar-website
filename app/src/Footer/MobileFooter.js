import React from "react";

import WhiteLogo from "../images/bstar-white-logo.png";

import styles from "./styles.module.scss";

function MobileFooter() {
  return (
    <div className={styles.mobileFooter}>
      <div className="footerCol3">
        <img src={WhiteLogo} alt="white bstar logo"></img>
        <address>
          127 Clement Street <br></br>
          San Frnacisco CA 94118 <br></br>
          (415) 933-9900
        </address>
      </div>
    </div>
  );
}

export default MobileFooter;
