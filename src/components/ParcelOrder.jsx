import React, { Fragment } from "react";
import ParcelCard from "./common/ParcelCard";

import "../styles/ParcelOrder.css";

const ParcelOrder = () => {
  return (
    <Fragment>
      <div className="row heading">
        <h2>Parcel Orders</h2>
      </div>
      <div className="row">
        <ParcelCard />
      </div>
    </Fragment>
  );
};

export default ParcelOrder;
