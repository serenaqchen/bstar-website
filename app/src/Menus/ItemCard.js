import React from "react";

import styles from "./styles.module.scss";

function ItemCard({ foodItem }) {
  return (
    <div className={styles.itemCard}>
      <h3>{foodItem.title}</h3>
    </div>
  );
}

export default ItemCard;
