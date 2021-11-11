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
        <img
          className="serviceTitle__Text"
          src={catering}
          alt="Catering Text"
        ></img>
      </div>
      <section className="pageInfo">
        <p className="pageInfo--text">
          B Star offers catering for corporate functions and all social
          occasions— from birthday buffets to full service weddings. We can work
          with you to put together a customized order with our signature dishes
          or you can quickly place an online order now.
        </p>
        <img className="blueBorder" src={Border} alt="Border"></img>
        <div className="questions">
          <div>
            <p className="pageInfo--text">Know what you’d like?</p>
            <a
              className="pageInfo--button"
              href="https://www.ezcater.com/catering/pvt/b-star-san-francisco?fcv=1"
              target="_blank"
            >
              PLACE&nbsp;&nbsp;ORDER&nbsp;&nbsp; NOW
            </a>
          </div>
          <div>
            <p className="pageInfo--text"> Need help ordering?</p>
            <a
              className="pageInfo--button"
              href="https://partners.gatherhere.com/lead-form/t2dwj26p"
              target="_blank"
            >
              REQUEST&nbsp;&nbsp;MORE&nbsp;&nbsp;INFO
            </a>
          </div>
        </div>

        <p className="pageInfo--text">
          You can also reach our Catering Department at (415) 592-8907 or by
          email at eventsatbstar@gmail.com.
        </p>
      </section>
    </div>
  );
}

export default Catering;
