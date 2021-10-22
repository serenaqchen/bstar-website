import React from "react";

import styles from "./styles.module.scss";

function CourseType({ courseTitle, itemsArr }) {
  return (
    <div className={styles.courseType}>
      <h1>{courseTitle}</h1>
    </div>
  );
}

export default CourseType;
