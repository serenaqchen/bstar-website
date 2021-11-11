import React from "react";

import { convertToIcon } from "./menuFxns.js";
import styles from "./styles.module.scss";

function ItemCard({ foodItem, modifications }) {
  return (
    <div className={styles.itemCard}>
      <div className="itemCardTitle">
        <h3 className="itemCardTitle__title">{foodItem.title}</h3>
        <p className="itemCardTitle__price">
          {foodItem.price !== 0.0 && `$${foodItem.price}`}
        </p>
      </div>
      <div className="modifications">
        {modifications &&
          modifications.map((mod, index) => {
            if (mod.title === foodItem.title) {
              return (
                <p key={index} className="modifications__elem">
                  {mod.description} ${mod.price}
                </p>
              );
            }
          })}
      </div>
      <p className="description">{foodItem.description}</p>
      <div className="icons">
        {foodItem.allergens
          .split(", ")
          .map((allergen, index) => convertToIcon(allergen, index))}
      </div>
    </div>
  );
}

export default ItemCard;
