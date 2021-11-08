import React from "react";

import WhiteBorder from "../images/border-style-white.png";

function BstarTitle({ title }) {
  return (
    <div className={StyleSheet.BstarTitle}>
      <div className="imageOverlay">
        <div className={title}>
          <div className="title">
            <img src={WhiteBorder} alt="white border"></img>
            <h1>{title}</h1>
            <img src={WhiteBorder} alt="white border"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BstarTitle;
