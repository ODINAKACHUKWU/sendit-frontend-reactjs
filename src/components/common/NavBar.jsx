import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import "../../styles/Header.css";

export const HomePageNavBar = () => {
  return (
    <header>
      <div className="header-logo">
        <img src="src/assets/logo.png" alt="SendIT Logo" className="logo" />
      </div>
      <div className="header-buttons">
        <Button
          path="/signup"
          classId="sign-up"
          text="SIGN UP"
          className="fa fa-user-plus"
        />
        <Button
          path="/signin"
          classId="sign-in"
          text="SIGN IN"
          className="fa fa-sign-in"
        />
      </div>
    </header>
  );
};

export const PageHeader = ({
  type, text, classId, className, user, onClick,
}) => {
  return (
    <header>
      <div className="header-logo">
        <img src="src/assets/logo.png" alt="SendIT Logo" className="logo" />
      </div>
      <div>
        <span className="user-name">{user}</span>
        <button type={type} id={classId} onClick={onClick}>
          {text}
          {" "}
          <i className={className} />
        </button>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  classId: PropTypes.string.isRequired,
  className: PropTypes.string,
  user: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
