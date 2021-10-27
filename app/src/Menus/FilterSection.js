import React from "react";

import * as apiClient from "../apiClient";

import ItemCard from "./ItemCard";

function FilterSection({ type, courses }) {
  //store checked boxes
  const [checkedItems, setCheckedItems] = React.useState([]);
  //store food items
  const [foodItems, setFoodItems] = React.useState([]);

  const loadFoodItems = async () => {
    setFoodItems(await apiClient.getFoodItems(type));
  };

  const loadFilterFood = async () => {
    setFoodItems(await apiClient.getFilteredFood(checkedItems));
  };

  React.useEffect(() => {
    loadFoodItems();
  }, []);

  //get list of filter items that are checked
  const handleCheckedItem = (e) => {
    const checkedOrNot = e.target.checked;
    const checkedVal = e.target.value;

    if (checkedOrNot && !checkedItems.includes(checkedVal)) {
      setCheckedItems([...checkedItems, checkedVal]);
      console.log("added", checkedItems);
    } else if (!checkedOrNot && checkedItems.includes(checkedVal)) {
      checkedItems.splice(
        checkedItems.indexOf(checkedVal),
        checkedItems.indexOf(checkedVal) + 1,
      );
      setCheckedItems(checkedItems);
      console.log("deleted", checkedItems);
    }
    if (checkedItems.length !== 0) {
      loadFilterFood(checkedItems);
    }
  };
  console.log(checkedItems.join("+"));

  console.log(foodItems);
  //want to separate each food item by course
  const separateByCourses = (course, foodItems) => {
    return (
      <div id={`${course}-section`} key={course}>
        <h2>{course}</h2>
        {foodItems
          .filter(
            (foodItem) => foodItem[`${type.toLowerCase()}_course`] === course,
          )
          .map((foodItem) => (
            <ItemCard key={foodItem.id} foodItem={foodItem} />
          ))}
      </div>
    );
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
      {courses && courses.map((course) => separateByCourses(course, foodItems))}
    </div>
  );
}

export default FilterSection;
