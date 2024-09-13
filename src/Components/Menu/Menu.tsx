import { Link, Outlet } from "react-router-dom";
import "./Menu.scss";
import tglogo from "../../assets/Telegram_logo.svg";
import logo from "/favicon.png";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-items">
          <img className="menu-icon" src={logo} alt="logo"></img>

          <Link to="/main" className="menu-link">
            Main
          </Link>
          <Link to="/learn" className="menu-link">
            Learning
          </Link>

          <a href="https://t.me/ttemuchin4" className="menu-tglink">
            <img src={tglogo} alt="telegram logo" />
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
