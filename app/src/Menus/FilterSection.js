import React from "react";

import * as apiClient from "../apiClient";

import CourseType from "./CourseType";

function FilterSection({ type, courses }) {
  //store checked boxes
  const [filters, setFilters] = React.useState([]);
  //store food items
  const [foodItems, setFoodItems] = React.useState([]);

  const loadFoodItems = async () => {
    setFoodItems(await apiClient.getFoodItems(type));
  };

  React.useEffect(() => {
    loadFoodItems();
  }, []);

  //get list of filter items that are checked
  const handleCheckedItem = (e) => {
    const checkedOrNot = e.target.checked;
    const checkedFilter = e.target.value;

    if (checkedOrNot && !filters.includes(checkedFilter)) {
      setFilters([...filters, checkedFilter]);
      console.log(foodItems);
      console.log(filters);
    } else if (!checkedOrNot && filters.includes(checkedFilter)) {
      filters.splice(
        filters.indexOf(checkedFilter),
        filters.indexOf(checkedFilter) + 1,
      );
      setFilters(filters);
    }
  };

  return (
    <div>
      <h3>Dietary Restrictions</h3>
      <form>
        <input
          type="checkbox"
          id="Vegetarian"
          name="Vegetarian"
          value="Vegetarian"
          onChange={handleCheckedItem}
        ></input>
        <label htmlFor="Vegetarian">Vegeterian</label>
        <input
          type="checkbox"
          id="Gluten-Free"
          name="Gluten-Free"
          value="Gluten-Free"
          onChange={handleCheckedItem}
        ></input>
        <label htmlFor="Gluten-Free">Gluten-Free</label>
        <input
          type="checkbox"
          id="Peanut-Free"
          name="Peanut-Free"
          value="Peanut-Free"
          onChange={handleCheckedItem}
        ></input>
        <label htmlFor="Peanut-Free">Peanut-Free</label>
        <input
          type="checkbox"
          id="Dairy-Free"
          name="Dairy-Free"
          value="Dairy-Free"
          onChange={handleCheckedItem}
        ></input>
        <label htmlFor="Dairy-Free">Dairy-Free</label>
      </form>
      <div className="courses-nav">
        {courses &&
          courses.map((course, index) => (
            <a href={`#${course}-section`} key={index}>
              {course}
            </a>
          ))}
      </div>
      {/* wait to receive courses from api and then map */}
      {/* want to separate each food item by course */}
      {courses &&
        courses.map((course) => (
          <CourseType
            key={course}
            filters={filters}
            course={course}
            foodItems={foodItems}
            type={type}
          />
        ))}
    </div>
  );
}

export default FilterSection;
