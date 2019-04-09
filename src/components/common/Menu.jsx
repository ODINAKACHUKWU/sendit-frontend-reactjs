import React from "react";
import { Link } from "react-router-dom";

import "../../styles/Menu.css";

const Menu = () => {
  return (
    <div className="menu-list">
      <Link to="/overview">
        <i className="fa fa-bar-chart" />
        {" "}
        Overview
      </Link>
      <Link to="/orders">
        <i className="fa fa-list" />
        {" "}
        Parcel Orders
      </Link>
      <Link to="/create-order">
        <i className="fa fa-plus-circle" />
        {" "}
        Create Delivery Order
      </Link>
    </div>
  );
};

const AdminMenu = () => {
  return (
    <div className="menu-list">
      <Link to="/customers">
        <i className="fa fa-user" />
        {" "}
        Customers
      </Link>
      <Link to="/customers-orders">
        <i className="fa fa-list" />
        {" "}
        Orders
      </Link>
    </div>
  );
};

export { Menu, AdminMenu };
