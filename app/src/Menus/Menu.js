import React from "react";

import * as apiClient from "../apiClient";
import WhiteBorder from "../images/border-style-white.png";

import CourseType from "./CourseType";
import FilterSection from "./FilterSection";
import styles from "./styles.module.scss";

function Menu({ type }) {
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

  React.useEffect(() => {
    loadInfo();
    loadFoodItems();
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
              type={type}
            />
          ))}
      </div>
    </div>
  );
}

export default Menu;
