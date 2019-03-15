import React from "react";
import Button from "./common/Button";
import "../styles/App.css";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="src/assets/logo.png" alt="SendIT Logo" className="logo" />
      </div>
      <div className="header-buttons">
        <Button
          path="/"
          classId={"sign-up"}
          text={"SIGN UP"}
          className={"fa fa-sign-in"}
        />
        <Button
          path="/signin"
          classId={"sign-in"}
          text={"SIGN IN"}
          className={"fa fa-user-plus"}
        />
      </div>
    </header>
  );
};

export default Header;
