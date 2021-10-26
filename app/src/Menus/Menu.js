import React from "react";

import * as apiClient from "../apiClient";
import WhiteBorder from "../images/border-style-white.png";

import FilterSection from "./FilterSection";
import styles from "./styles.module.scss";

function Menu({ type }) {
  const [info, setInfo] = React.useState([]);
  const courses = info[`${type.toLowerCase()}_courses`];

  const loadInfo = async () => {
    setInfo(await apiClient.getInfo());
  };

  React.useEffect(() => {
    loadInfo();
  }, []);

  return (
    <div className={styles.menu}>
      <div className="imageOverlay">
        <div className={type}>
          <div className="title">
            <img src={WhiteBorder} alt="white border"></img>
            <h1>{type} Menu</h1>
            <img src={WhiteBorder} alt="white border"></img>
          </div>
        </div>
      </div>
      <FilterSection courses={courses} />
    </div>
  );
}

export default Menu;
