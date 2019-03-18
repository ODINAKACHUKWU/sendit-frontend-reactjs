import React from "react";
import Button from "./common/Button";
import "../styles/Header.css";

export const HomePageNavBar = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="src/assets/logo.png" alt="SendIT Logo" className="logo" />
      </div>
      <div className="header-buttons">
        <Button
          path="/signup"
          classId={"sign-up"}
          text={"SIGN UP"}
          className={"fa fa-user-plus"}
        />
        <Button
          path="/signin"
          classId={"sign-in"}
          text={"SIGN IN"}
          className={"fa fa-sign-in"}
        />
      </div>
    </header>
  );
};

export const PageHeader = ({ path, classId, text, className }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="src/assets/logo.png" alt="SendIT Logo" className="logo" />
      </div>
      <div>
        <Button
          path={path}
          classId={classId}
          text={text}
          className={className}
        />
      </div>
    </header>
  );
};
