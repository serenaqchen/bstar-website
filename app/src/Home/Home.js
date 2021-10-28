import React from "react";

import Tasks from "../Tasks";
import useAuth0 from "../auth/useAuth0";
import BorderStyleBlue from "../images/border-style-blue.png";
import BstarFood from "../images/bstar-food2.jpeg";
import TeaLeafSalad from "../images/bstar_tealeafsalad.jpeg";

import styles from "./styles.module.scss";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className={styles.homepage}>
      <section className="intro">
        {/* <h1>{process.env.REACT_APP_TITLE}</h1>
        <p>{process.env.REACT_APP_SUBTITLE}</p> */}
        <img src={TeaLeafSalad} alt="Tea Leaf Salad"></img>
        <img src={BorderStyleBlue} alt="1st Blue Border"></img>
        <p className="about">
          The B Star menu was created with the goal of making delicious,
          healthy, and wholesome Asian food. Our dishes are inspired by the
          flavors of Thailand, China, Burma, India, Japan, the Philippines and
          of course our home here in California.
        </p>
        <img src={BorderStyleBlue} alt="2nd Blue Border"></img>
      </section>
      <section className="info">
        <img src={BstarFood} alt="Bstar food"></img>
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
      {/* {isAuthenticated ? <Tasks /> : null} */}
    </div>
  );
};

export default Home;
