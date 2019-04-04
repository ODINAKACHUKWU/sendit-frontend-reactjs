import React from "react";
import PropTypes from "prop-types";

import "../../styles/Menu.css";

const Menu = ({
  togglePage,
}) => {
  return (
    <div className="menu-list">
      <span id="overview" onClick={togglePage}>
        <i className="fa fa-bar-chart" />
        {" "}
        Overview
      </span>
      <span id="orders" onClick={togglePage}>
        <i className="fa fa-list" />
        {" "}
        Parcel Orders
      </span>
      <span id="create-order" onClick={togglePage}>
        <i className="fa fa-plus-circle" />
        {" "}
        Create Delivery Order
      </span>
    </div>
  );
};

const AdminMenu = ({
  togglePage,
}) => {
  return (
    <div className="menu-list">
      <span id="overview" onClick={togglePage}>
        <i className="fa fa-eye" />
        {" "}
        Customers
      </span>
      <span id="orders" onClick={togglePage}>
        <i className="fa fa-list" />
        {" "}
        Orders
      </span>
    </div>
  );
};

Menu.propTypes = {
  togglePage: PropTypes.func,
};

AdminMenu.propTypes = {
  togglePage: PropTypes.func,
};

export { Menu, AdminMenu };
