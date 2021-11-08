import React from "react";

import Check from "../images/icons/Check-Circle.png";

import styles from "./styles.module.scss";

function FilterSection({ filterMenu }) {
  //filters that have been checked and is used to filter menu
  const [checkedFilters, setCheckedFilters] = React.useState([]);
  //managing the state of showing the different filter options to choose from
  const [showOptions, setShowOptions] = React.useState(false);

  //get list of filter items that are checked
  const handleCheckedItem = (e) => {
    const checked = e.target.checked;
    const currentFilter = e.target.value;
    const newFilters = new Set([...checkedFilters]); // always distinct

    if (checked) {
      newFilters.add(currentFilter);
      setCheckedFilters(Array.from(newFilters));
    } else {
      newFilters.delete(currentFilter);
      setCheckedFilters(Array.from(newFilters));
    }

    filterMenu(Array.from(newFilters));
    setShowOptions(false);
  };

  return (
    <div className={styles.filterSection}>
      <h3>Dietary Restrictions</h3>
      <div className="selectedFilters">
        {checkedFilters.map((checkedfilter) => (
          <button className="checkedFilters" key={checkedfilter}>
            <img src={Check} alt="check mark"></img>
            <span>{checkedfilter}</span>
          </button>
        ))}
        {checkedFilters.length != 0 && (
          <button onClick={(e) => window.location.reload()}>Clear</button>
        )}
        <div className="filters">
          <div className="dropdown">
            <button className="dropbtn" onClick={(e) => setShowOptions(true)}>
              + Add Filter
            </button>
            <form
              className={`dropdown-content ${showOptions && "showOptions"}`}
            >
              <div className="options">
                <input
                  type="checkbox"
                  id="Vegetarian"
                  name="Vegetarian"
                  value="Vegetarian"
                  onChange={handleCheckedItem}
                ></input>
                <label htmlFor="Vegetarian">Vegeterian</label>
              </div>
              <div className="options">
                <input
                  type="checkbox"
                  id="Gluten-Free"
                  name="Gluten-Free"
                  value="Gluten-Free"
                  onChange={handleCheckedItem}
                ></input>
                <label htmlFor="Gluten-Free">Gluten-Free</label>
              </div>
              <div className="options">
                <input
                  type="checkbox"
                  id="Peanut-Free"
                  name="Peanut-Free"
                  value="Peanut-Free"
                  onChange={handleCheckedItem}
                ></input>
                <label htmlFor="Peanut-Free">Peanut-Free</label>
              </div>
              <div className="options">
                <input
                  type="checkbox"
                  id="Dairy-Free"
                  name="Dairy-Free"
                  value="Dairy-Free"
                  onChange={handleCheckedItem}
                ></input>
                <label htmlFor="Dairy-Free">Dairy-Free</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
