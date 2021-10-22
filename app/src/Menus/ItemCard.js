import React from "react";

import styles from "./styles.module.scss";

function ItemCard({ title, price, description, modifications }) {
  return (
    <div className={styles.itemCard}>
      <h1>Title Card</h1>
    </div>
  );
}

export default ItemCard;
