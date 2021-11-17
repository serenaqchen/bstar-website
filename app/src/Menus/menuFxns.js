import glutenFreeOption from "../images/icons/GF-Req.svg";
import glutenFree from "../images/icons/GF.svg";
import vegRequest from "../images/icons/V-Req.svg";
import veg from "../images/icons/V.svg";
import popular from "../images/icons/popular1.svg";

export const convertToIcon = (allergy, index) => {
  if (allergy === "Popular") {
    return (
      <img
        className="allergyIcon allergyIcon--small"
        src={popular}
        alt="Popular Icon"
        key={index}
      ></img>
    );
  } else if (allergy === "Gluten-Free") {
    return (
      <img
        className="allergyIcon"
        src={glutenFree}
        alt="Gluten-Free Icon"
        key={index}
      ></img>
    );
  } else if (allergy === "Gluten-Free Option") {
    return (
      <img
        className="allergyIcon"
        src={glutenFreeOption}
        alt="Gluten-Free Option Icon"
        key={index}
      ></img>
    );
  } else if (allergy === "Vegetarian") {
    return (
      <img
        className="allergyIcon"
        src={veg}
        alt="Vegetarian Icon"
        key={index}
      ></img>
    );
  } else if (allergy === "Vegetarian Option") {
    return (
      <img
        className="allergyIcon"
        src={vegRequest}
        alt="Vegetarian Option Icon"
        key={index}
      ></img>
    );
  }
};
