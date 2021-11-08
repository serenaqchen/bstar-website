import React from "react";

import BstarTitle from "../Components/BstarTitle";
import * as apiClient from "../apiClient";
import WhiteBorder from "../images/border-style-white.png";

import CourseType from "./CourseType";
import FilterSection from "./FilterSection";
import styles from "./styles.module.scss";

function Menu({ type }) {
  const loadModifications = async () => {
    setModifications(await apiClient.getModifications(type));
  };

  const loadInfo = async () => {
    setInfo(await apiClient.getInfo());
  };

  const loadFoodItems = async () => {
    const foodItems = await apiClient.getFoodItems(type);

    setFoodItems(foodItems);
    setFullMenu(foodItems);
  };

  const [info, setInfo] = React.useState([]);
  const [fullMenu, setFullMenu] = React.useState({});
  const courses = info[`${type.toLowerCase()}_courses`];
  //store food items
  const [foodItems, setFoodItems] = React.useState([]);
  const [modifications, setModifications] = React.useState([]);

  const filterMenu = (filters) => {
    let filterFoodItems = [...fullMenu];

    for (let filter of filters) {
      if (filter === "Peanut-Free" || filter === "Dairy-Free") {
        filterFoodItems = filterFoodItems.filter(
          (item) =>
            !item.allergens.includes("Contains " + filter.split("-")[0]),
        );
      } else {
        filterFoodItems = filterFoodItems.filter((item) =>
          item.allergens.includes(filter),
        );
      }
    }
    return setFoodItems(filterFoodItems);
  };

  console.log(modifications);

  React.useEffect(() => {
    loadInfo();
    loadFoodItems();
    loadModifications();
  }, []);

  return (
    <div className={styles.menu}>
      <BstarTitle title={`${type} Menu`} />

      <FilterSection
        filterMenu={filterMenu}
        setFoodItems={setFoodItems}
        fullMenu={fullMenu}
      />
      <div className="courses-nav">
        {courses &&
          courses.map((course, index) => (
            <a className="courses" href={`#${course}-section`} key={index}>
              {course.toUpperCase()}
            </a>
          ))}
      </div>
      {/* wait to receive courses from api and then map */}
      {/* want to separate each food item by course */}
      <div className="courses">
        {courses &&
          courses.map((course) => (
            <CourseType
              key={course}
              course={course}
              foodItems={foodItems}
              modifications={modifications}
            />
          ))}
      </div>
    </div>
  );
}

export default Menu;
