import React from "react";

import BstarTitle from "../Components/BstarTitle";
import Border from "../images/Border.png";
import catering from "../images/Group-Dinning.png";

import styles from "./styles.module.scss";

function GroupDinning() {
  return (
    <div className={styles.StaticPages}>
      <BstarTitle title="Group Dinning" showTitle="false" />
      <div className="serviceTitle">
        <img src={catering}></img>
      </div>
      <section className="pageInfo">
        <p className="pageInfo--text">
          Whether you’re planning a birthday party, bridal or baby shower,
          corporate event, or just a get- together with friends and family, B
          Star is the perfect place! For groups of 11 or more or any private
          events, submit an inquiry and we’ll get back to you right away.
        </p>
        <a
          className="pageInfo--button"
          href="https://partners.gatherhere.com/lead-form/t2dwj26p"
          target="_blank"
        >
          SUBMIT &nbsp;INQUIRY
        </a>
        <img src={Border} alt="Border"></img>
        <p className="pageInfo--text">
          You may also contact our Events Department at eventsatbstar@gmail.com,
          or ask for Emily at (415) 592-8907.
        </p>
      </section>
    </div>
  );
}

export default GroupDinning;
