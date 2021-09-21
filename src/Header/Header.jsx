import React from "react";
import head from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png"
        alt="LogoPicture"
      ></img>
      <h1>Logo</h1>
      <div className={head.login}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink to={"/login"}>loginName</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
