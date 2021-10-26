import React from "react";

import ItemCard from "./ItemCard";

function FilterSection({ courses }) {
  //store checked boxes
  const [checkedItems, setCheckedItems] = React.useState([]);

  const handleCheckedItem = (e) => {
    const checkedOrNot = e.target.checked;
    const checkedVal = e.target.value;
    console.log(checkedOrNot);
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
  };

  console.log(checkedItems);
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
      <div>
        {courses &&
          courses.map((course, index) => (
            <a href="#" key={index}>
              {course}
            </a>
          ))}
      </div>
      <ItemCard />
    </div>
  );
}

export default FilterSection;
