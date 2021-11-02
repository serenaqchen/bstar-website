import React from "react";

import styles from "./styles.module.scss";

function Button({ text, handleFxn }) {
  return (
    <div className={styles.button}>
      <button onClick={handleFxn}>{text}</button>
    </div>
  );
}

export default Button;
