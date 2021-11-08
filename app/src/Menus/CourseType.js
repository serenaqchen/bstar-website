import React from "react";

import ItemCard from "./ItemCard";
import styles from "./styles.module.scss";

function CourseType({ course, foodItems, modifications }) {
  return (
    <div className={styles.courseType}>
      <div id={`${course}-section`}>
        <h2>{course}</h2>
        <div className="food-section">
          {foodItems
            .filter((foodItem) => foodItem["course"] === course)
            .map((foodItem) => {
              return (
                <ItemCard
                  key={foodItem.id}
                  foodItem={foodItem}
                  modifications={modifications}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default CourseType;
