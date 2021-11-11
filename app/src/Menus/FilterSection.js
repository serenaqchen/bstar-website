import React from "react";

import Check from "../images/icons/check.svg";

import styles from "./styles.module.scss";

function FilterSection({ filterMenu }) {
  const filterState = {
    Popular: false,
    Vegetarian: false,
    "Gluten-Free": false,
    "Peanut-Free": false,
    "Dairy-Free": false,
  };

  //filters that have been checked and is used to filter menu
  const [checkedFilters, setCheckedFilters] = React.useState([]);
  //managing the state of showing the different filter options to choose from
  const [state, dispatch] = React.useReducer(reducer, filterState);

  function reducer(state, action) {
    switch (action.type) {
      case "selectPopular":
        return { ...state, Popular: true };
      case "deselectPopular":
        return { ...state, Popular: false };
      case "selectVegetarian":
        return { ...state, Vegetarian: true };
      case "selectGluten-Free":
        return { ...state, "Gluten-Free": true };
      case "selectPeanut-Free":
        return { ...state, "Peanut-Free": true };
      case "selectDairy-Free":
        return { ...state, "Dairy-Free": true };
      case "deselectVegetarian":
        return { ...state, Vegetarian: false };
      case "deselectGluten-Free":
        return { ...state, "Gluten-Free": false };
      case "deselectPeanut-Free":
        return { ...state, "Peanut-Free": false };
      case "deselectDairy-Free":
        return { ...state, "Dairy-Free": false };
      default:
        return {
          Popular: false,
          Vegetarian: false,
          "Gluten-Free": false,
          "Peanut-Free": false,
          "Dairy-Free": false,
        };
    }
  }

  //get list of filter items that are checked
  const handleCheckedItem = (e) => {
    e.preventDefault();
    const currentFilter = e.target.value;
    const newFilters = new Set([...checkedFilters]); // always distinct

    if (!state[currentFilter]) {
      newFilters.add(currentFilter);
      setCheckedFilters(Array.from(newFilters));
      dispatch({ type: `select${currentFilter}` });
    } else {
      newFilters.delete(currentFilter);
      setCheckedFilters(Array.from(newFilters));
      dispatch({ type: `deselect${currentFilter}` });
    }

    filterMenu(Array.from(newFilters));
  };

  const handleClearFilters = (e) => {
    dispatch({ type: "default" });
    setCheckedFilters([]);
    filterMenu([]);
  };

  return (
    <div className={styles.filterSection}>
      <h3>Filters & Dietary Restrictions</h3>
      {/* selectedFilters populates when a filter is clicked */}
      <div className="options">
        <button
          className={
            state["Popular"]
              ? "option_elem--selected"
              : "option_elem--notselected"
          }
          name="Popular"
          value="Popular"
          onClick={handleCheckedItem}
        >
          {state["Popular"] ? (
            <img alt="Check Icon" src={Check}></img>
          ) : (
            <span> + </span>
          )}{" "}
          Popular
        </button>
        <button
          className={
            state["Vegetarian"]
              ? "option_elem--selected"
              : "option_elem--notselected"
          }
          name="Vegetarian"
          value="Vegetarian"
          onClick={handleCheckedItem}
        >
          {" "}
          {state["Vegetarian"] ? (
            <img alt="Check Icon" src={Check}></img>
          ) : (
            <span>+</span>
          )}{" "}
          Vegeterian
        </button>

        <button
          className={
            state["Gluten-Free"]
              ? "option_elem--selected"
              : "option_elem--notselected"
          }
          name="Gluten-Free"
          value="Gluten-Free"
          onClick={handleCheckedItem}
        >
          {" "}
          {state["Gluten-Free"] ? (
            <img alt="Check Icon" src={Check}></img>
          ) : (
            <span>+</span>
          )}{" "}
          Gluten-Free
        </button>

        <button
          className={
            state["Peanut-Free"]
              ? "option_elem--selected"
              : "option_elem--notselected"
          }
          name="Peanut-Free"
          value="Peanut-Free"
          onClick={handleCheckedItem}
        >
          {state["Peanut-Free"] ? (
            <img alt="Check Icon" src={Check}></img>
          ) : (
            <span>+</span>
          )}{" "}
          Peanut-Free
        </button>

        <button
          className={
            state["Dairy-Free"]
              ? "option_elem--selected"
              : "option_elem--notselected"
          }
          name="Dairy-Free"
          value="Dairy-Free"
          onClick={handleCheckedItem}
        >
          {state["Dairy-Free"] ? (
            <img alt="Check Icon" src={Check}></img>
          ) : (
            <span>+</span>
          )}{" "}
          Dairy-Free
        </button>

        {checkedFilters.length !== 0 && (
          <button onClick={handleClearFilters}>Clear</button>
        )}
      </div>
    </div>
  );
}

export default FilterSection;
