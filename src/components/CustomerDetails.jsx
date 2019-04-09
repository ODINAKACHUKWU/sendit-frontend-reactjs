import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "../styles/ParcelDetails.css";

const CustomerDetails = () => {
  return (
    <Fragment>
      <div className="row heading">
        <h2>Customer Details</h2>
      </div>
      <div className="row icon-container">
        <Link to="/customers">
          <i className="fa fa-arrow-left" title="Back to Customers page" />
        </Link>
      </div>
      <div className="row">
        <ul>
          <li>
            <b>Customer ID:</b>
            {" "}
                        12
          </li>
          <li>
            <b>First name:</b>
            {" "}
                        Ezenwa
          </li>
          <li>
            <b>Last name:</b>
            {" "}
                        Ogbonna
          </li>
          <li>
            <b>Email:</b>
            {" "}
                        ezenwa.ogbonna@gmail.com
          </li>
          <li>
            <b>Phone number:</b>
            {" "}
                        07039324997
          </li>
          <li>
            <b>Role:</b>
            {" "}
                        Regular
          </li>
        </ul>
      </div>
      <div>
        <div>
          <button id="admin" className="rev-btn">Make Admin</button>
          <button id="regular" className="rev-btn">Make Regular</button>
          {/* This Parcel orders link fetches all parcels by a particular user */}
          <a href="user-orders.html" className="rev-btn">Parcel Orders</a>
        </div>
      </div>
    </Fragment>
  );
};

export default CustomerDetails;
