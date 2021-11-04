import React from "react";

import Check from "../images/icons/Check-Circle.png";

import styles from "./styles.module.scss";

function FilterSection({ filterMenu, setFoodItems, fullMenu }) {
  const [filters, setFilters] = React.useState([]);
  const [showRestrictions, setShowRestrictions] = React.useState(true);
  const [showOptions, setShowOptions] = React.useState(false);

  //get list of filter items that are checked
  const handleCheckedItem = (e) => {
    const checkedOrNot = e.target.checked;
    const checkedFilter = e.target.value;

    //if check and the list does not include filter
    if (checkedOrNot && !filters.includes(checkedFilter)) {
      setFilters([...filters, checkedFilter]);
      //if not checked and list includes filter then
    } else if (!checkedOrNot) {
      setFilters(filters.filter(filter => filter !== checkedFilter);
    }
  };

  const handleSubmitFilter = (e) => {
    e.preventDefault();
    filterMenu(filters);
    setShowOptions(false);
    setShowRestrictions(false);
  };

  const handleClearFilters = (e) => {
    setFoodItems(fullMenu);
    setShowRestrictions(true);
    setFilters([]);
  };

  // React.useEffect(() => {
  //   if (filters) {
  //     filterMenu();
  //   }
  // }, []);

  return (
    <div className={styles.filterSection}>
      <h3>Dietary Restrictions</h3>
      <div className="filters">
        {showRestrictions && (
          <div className="dropdown">
            <button className="dropbtn" onClick={(e) => setShowOptions(true)}>
              Select All That Applies ▾
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

              <button className="submitButton" onClick={handleSubmitFilter}>
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="selectedFilters">
        {!showOptions &&
          !showRestrictions &&
          filters.map((filter) => (
            <button className="checkedFilters" key={filter}>
              <img src={Check} alt="check mark"></img>
              <span>{filter}</span>
            </button>
          ))}
        {!showRestrictions && (
          <button className="clear" onClick={handleClearFilters}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default FilterSection;
