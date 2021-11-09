import React from "react";

import BstarTitle from "../Components/BstarTitle";
import Border from "../images/Border.png";
import catering from "../images/Catering.png";

import styles from "./styles.module.scss";

function Catering() {
  return (
    <div className={styles.StaticPages}>
      <BstarTitle title="Catering" showTitle="false" />
      <div className="serviceTitle">
        <img src={catering} alt="Catering Text"></img>
      </div>
      <section className="pageInfo">
        <p className="pageInfo--text">
          B Star offers catering for corporate functions and all social
          occasions— from birthday buffets to full service weddings. We can work
          with you to put together a customized order with our signature dishes
          or you can quickly place an online order now.
        </p>
        <img src={Border} alt="Border"></img>
        <p className="pageInfo--text">Know what you’d like?</p>
        <button className="pageInfo--button">
          P L A C E&nbsp;&nbsp;&nbsp; O R D E R&nbsp;&nbsp;&nbsp; N O W
        </button>
        <p className="pageInfo--text"> Need help ordering?</p>
        <button className="pageInfo--button">
          R E Q U E S T &nbsp;&nbsp;&nbsp;M O R E &nbsp;&nbsp;&nbsp;I N F O
        </button>
        <p className="pageInfo--text">
          You can also reach our Catering Department at (415) 592-8907 or by
          email at eventsatbstar@gmail.com.
        </p>
      </section>
    </div>
  );
}

export default Catering;
