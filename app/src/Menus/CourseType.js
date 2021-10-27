import React from "react";

import * as apiClient from "../apiClient";

import ItemCard from "./ItemCard";
import styles from "./styles.module.scss";

function CourseType({ type, course, filters, foodItems }) {
  const [filterFood, setFilterFood] = React.useState([]);

  // const loadFilterFood = async () => {
  //   console.log("load filter");
  //   setFilterFood(await apiClient.getFilteredFood(type, filters));
  // };

  // React.useEffect(() => {
  //   if (filters.length !== 0) {
  //     loadFilterFood();
  //   }
  // }, [filters]);

  // console.log("filters", filters);
  // console.log(filters.join("+"));
  // console.log("filtered food", filterFood);

  return (
    <div className={styles.courseType}>
      <div id={`${course}-section`} key={course}>
        <h2>{course}</h2>
        {/* {filterFood &&
          filterFood.map((foodItem) => (
            <ItemCard key={foodItem.id} foodItem={foodItem} />
          ))} */}
        {/* If there are no filters clicked then the whole menu will display */}
        {filters.length === 0 &&
          foodItems
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
  );
}

export default CourseType;
