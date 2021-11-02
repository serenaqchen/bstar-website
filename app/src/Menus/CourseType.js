import React from "react";

import ItemCard from "./ItemCard";
import styles from "./styles.module.scss";

function CourseType({ type, course, foodItems }) {
  return (
    <div className={styles.courseType}>
      <div id={`${course}-section`}>
        <h2>{course}</h2>
        <div className="food-section">
          {foodItems
            .filter(
              (foodItem) =>
                foodItem[`${type.toLowerCase()}_course`] ===
                course.replace(/\s/g, ""),
            )
            .map((foodItem) => (
              <ItemCard key={foodItem.id} foodItem={foodItem} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default CourseType;
