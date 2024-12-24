import React from "react";
import styles from "./MainPage.module.scss";
import { Link, Outlet } from "react-router-dom";
import WordForm from "./Form23"

const MainPage: React.FC = () => {
  return (
    <>
      <WordForm/>

      <div className={styles.pageContainer}>
        <div className={styles.buttonContainer}>
          <Link to="dictionary">
            <button className={styles.mainButtons}>Dictionary</button>
          </Link>
          <Link to="groups">
            <button className={styles.mainButtons}>Groups</button>
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
