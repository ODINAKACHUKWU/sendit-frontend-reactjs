import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import MDSpinner from "react-md-spinner";
import { createOrderRequest } from "../actions/creators/parcelActions";
import updateParcelData from "../utils/updateParcelData";

const VerifyParcel = ({
  parcelData, createParcel, handleCancel, history, isCreating, totalParcelOrder,
}) => {
  const updatedParcelData = updateParcelData.updateData(parcelData);

  const handleOk = (event) => {
    event.preventDefault();
    createParcel(updatedParcelData).then(
      history.push("/overview"),
      totalParcelOrder += 1,
    );
  };

  return (
    <Fragment>
      <div>
        <i className="fa fa-times" onClick={handleCancel} />
      </div>
      <div>
        <h3>Confirm Parcel Order</h3>
      </div>
      <div>
        <p>
          <b>Sender:</b>
          {" "}
          {updatedParcelData.sender}
        </p>
        <p>
          <b>Receiver:</b>
          {" "}
          {updatedParcelData.receiver}
        </p>
        <p>
          <b>Item:</b>
          {" "}
          {updatedParcelData.item}
        </p>
        <p>
          <b>Schedule:</b>
          {" "}
          {updatedParcelData.schedule}
        </p>
        <p>
          <b>Pickup Location:</b>
          {" "}
          {updatedParcelData.pickupLocation}
        </p>
        <p>
          <b>Destination:</b>
          {" "}
          {updatedParcelData.destination}
        </p>
        <p>
          <b>Price:</b>
          {" "}
&#8358;
          {updatedParcelData.price}
        </p>
      </div>
      <div>
        <p>Do you want to continue?</p>
      </div>
      <div>
        <button onClick={handleOk} disabled={isCreating}>{isCreating ? <MDSpinner /> : "Yes"}</button>
        <button onClick={handleCancel}>No</button>
      </div>
    </Fragment>
  );
};

VerifyParcel.propTypes = {
  parcelData: PropTypes.shape(),
  createParcel: PropTypes.func,
  handleCancel: PropTypes.func,
  history: PropTypes.shape(),
  isCreating: PropTypes.bool,
  totalParcelOrder: PropTypes.number,
};

const mapStateToProps = ({ overView: { payload: { totalParcelOrder } } }) => ({
  totalParcelOrder,
});

const mapDispatchToProps = dispatch => ({
  createParcel: parcelData => dispatch(createOrderRequest(parcelData)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(VerifyParcel));
