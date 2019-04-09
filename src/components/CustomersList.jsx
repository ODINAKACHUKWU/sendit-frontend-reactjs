import React, { Fragment } from "react";
import CustomerCard from "./common/CustomerCard";

// import "../styles/CustomersList.css";

const CustomersList = () => {
  return (
    <Fragment>
      <div className="row heading">
        <h2>Customers</h2>
      </div>
      <div className="row">
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </Fragment>
  );
};

export default CustomersList;
