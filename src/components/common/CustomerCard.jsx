import React, { Fragment } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import MDSpinner from "react-md-spinner";
// import createOrderRequest from "../actions/creators/parcelActions";
// import updateParcelData from "../utils/updateParcelData";

// Customer card and parcel card share the same css file
import "../../styles/ParcelCard.css";

const ParcelCard = () => {
  return (
    <Fragment>
      <Link to="/customer-details">
        <div className="card-container">
          <div className="card-container__items">
            <span>
              <b>Customer ID:</b>
              {" "}
                            10
            </span>
            <span>
              <b>Name:</b>
              {" "}
                            Ezenwa Ogbonna
            </span>
          </div>
          <div className="card-container__items">
            <span>
              <b>Email:</b>
              {" "}
                            ezenwa.ogbonna@gmail.com
            </span>
            <span>
              <b>Phone number:</b>
              {" "}
                            07039324997
            </span>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default ParcelCard;
