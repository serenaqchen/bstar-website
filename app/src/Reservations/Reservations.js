import React from "react";

import Border from "../images/Border.png";

function Reservations() {
  return (
    <div className="title">
      <h1>RESERVATIONS & WAITLIST</h1>
      <img src={Border} alt="Blue Border"></img>
      <p>
        Due to the pandemic, we have expanded our restaurant and now have
        outdoor seating. Check the current weather and come enjoy some delicious
        food in our new outdoor dinning setup!{" "}
      </p>
    </div>
  );
}

export default Reservations;
