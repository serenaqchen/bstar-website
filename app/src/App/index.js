import * as React from "react";

import { Routes, Route } from "react-router-dom";

import Footer from "../Footer/Footer";
import MobileFooter from "../Footer/MobileFooter";
import Home from "../Home/Home";
import Brunch from "../Menus/Brunch";
import Dinner from "../Menus/Dinner";
import Nav from "../Nav";
import Reservations from "../Reservations/Reservations";
import ReuseableContainers from "../ReusableContainers/ReusableContainers";
import Catering from "../Services/Catering";
import GroupDining from "../Services/GroupDining";
import useApi from "../auth/useApi";
import useAuth0 from "../auth/useAuth0";

import styles from "./styles.module.scss";

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const { loading, apiClient } = useApi();

  React.useEffect(() => {
    if (isAuthenticated && !loading) {
      apiClient.addOrUpdateUser(user);
    }
  }, [isAuthenticated, user, loading, apiClient]);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/brunch" element={<Brunch />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/group-dining" element={<GroupDining />} />
          <Route
            path="/reusable-containers"
            element={<ReuseableContainers />}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
        <MobileFooter />
      </footer>
    </>
  );
};

export default App;
