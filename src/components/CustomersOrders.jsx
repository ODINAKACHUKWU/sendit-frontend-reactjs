import React, { Fragment } from "react";
import ParcelCard from "./common/ParcelCard";

import "../styles/ParcelOrder.css";

const CustomersOrders = () => {
  return (
    <Fragment>
      <div className="row heading">
        <h2>Orders</h2>
      </div>
      <div className="row">
        <ParcelCard />
        <ParcelCard />
        <ParcelCard />
      </div>
    </Fragment>
  );
};

export default CustomersOrders;
