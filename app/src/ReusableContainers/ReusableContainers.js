import React from "react";

import BstarTitle from "../Components/BstarTitle";
import reuseableContainers from "../images/Dispatch.jpeg";

import styles from "./styles.module.scss";

function ReusableContainers() {
  return (
    <div className={styles.reusableContainers}>
      <BstarTitle title="Reusable Containers" showTitle="false" />
      <section className="container">
        <h1 className="container__Title">Reuseable Containers</h1>
        <h2 className="container__SubTitle">
          Go Zero Waste with Dispatch Goods Reusable Containers!{" "}
        </h2>
        <p className="container__Text">
          Your food will be packaged in reusable containers and placed in a
          reusable bag. Dispatch Goods will schedule at-home container
          collection, just send them a text! It's that easy!
        </p>
        <p className="container__Text">
          Order online, in person or over the phone. Just ask for your order to
          be packed in Dispatch Goods Reusable Containers.
        </p>
        <img className="container__image" src={reuseableContainers}></img>
      </section>
    </div>
  );
}

export default ReusableContainers;
