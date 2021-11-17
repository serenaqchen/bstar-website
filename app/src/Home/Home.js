import React from "react";

import BorderStyleBlue from "../images/border-style-blue.png";
import BstarFood from "../images/bstar-food2.jpeg";
import TeaLeafSalad from "../images/bstar_tealeafsalad.jpeg";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.homepage}>
      <section className="intro">
        <img
          className="intro--img"
          src={TeaLeafSalad}
          alt="Tea Leaf Salad"
        ></img>
        <img
          className="intro--img intro--img__topMargin"
          src={BorderStyleBlue}
          alt="1st Blue Border"
        ></img>
        <p className="about">
          The B Star menu was created with the goal of making delicious,
          healthy, and wholesome Asian food. Our dishes are inspired by the
          flavors of Thailand, China, Burma, India, Japan, the Philippines and
          of course our home here in California.
        </p>
        <img
          className="intro--img intro--img__bottomMargin"
          src={BorderStyleBlue}
          alt="2nd Blue Border"
        ></img>
      </section>
      <section className="info">
        <img className="info--img" src={BstarFood} alt="Bstar food"></img>
        <div className="storeInfo">
          <h2>ADDRESS</h2>
          <address>
            127 CLEMENT ST. <br></br> SAN FRANCISCO, CA 94118 <br></br> (415)
            933-9900
          </address>
          <h2>HOURS</h2>
          <p>
            MONDAY <br></br>
            4:30-8:15pm <br></br>
            <br></br>
            TUESDAY<br></br>
            4:30-8:15pm<br></br>
            <br></br>
            WEDNESDAY<br></br>
            Closed<br></br>
            <br></br>
            THURSDAY<br></br>
            4:30-8:15pm<br></br>
            <br></br>
            FRIDAY<br></br>
            11:00am-3:00pm, 4:30-8:15pm<br></br>
            <br></br>
            SATURDAY<br></br>
            11:00am-3:00pm, 4:30-8:15pm<br></br>
            <br></br>
            SUNDAY<br></br>
            11:00am-3:00pm, 4:30-8:15pm
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
