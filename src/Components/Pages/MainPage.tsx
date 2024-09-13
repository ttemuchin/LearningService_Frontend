import React from "react";
import styles from "./MainPage.module.scss";
import { Link, Outlet } from "react-router-dom";

const MainPage: React.FC = () => {
  // const [showButtons, setShowButtons] = useState(true);

  // const removeButtons = () => {
  //   setShowButtons(false);
  // }; не нужная штука(( но как обновить стейт.. из словаря идем на мейн, setShowButtons(true)

  return (
    <>
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
