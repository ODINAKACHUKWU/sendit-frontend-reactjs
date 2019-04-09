import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Modal from "react-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import { getUsersParcelDetails } from "../actions/creators/parcelActions";
import ChangeDestination from "./ChangeDestination";

import "../styles/ParcelDetails.css";
import "../styles/Modal.css";

class ParcelDetails extends Component {
  state = {
    modalIsOpen: false,
  };

  componentDidMount() {
    const { fetchParcelDetails, match: { params: { id } } } = this.props;
    fetchParcelDetails(id);
  }

  handleCancel = (event) => {
    event.preventDefault();
    this.setState({ modalIsOpen: false });

  };

  handleChangeDestination = (event) => {
    event.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  render() {
    const { modalIsOpen } = this.state;
    const { isProcessing, parcel } = this.props;
    return (
      <Fragment>
        {isProcessing ? <MDSpinner /> : (
          <div>
            <div className="row heading">
              <h2>Parcel Details</h2>
            </div>
            <div className="row icon-container">
              <Link to="/orders">
                <i className="fa fa-arrow-left" title="Back to Orders page" />
              </Link>
              <i className="fa fa-times" title="Cancel order" onClick={this.handleCancel} />
              <i className="fa fa-edit" title="Change destination" onClick={this.handleChangeDestination} />
            </div>
            <div className="row parcel-details">
              <div className="parcel-details__item">
                <b>Parcel ID:</b>
                {parcel.id}
              </div>
              <div className="parcel-details__item">
                <b>Sender:</b>
                {parcel.sender}
              </div>
              <div className="parcel-details__item">
                <b>Receiver:</b>
                {parcel.receiver}
              </div>
              <div className="parcel-details__item">
                <b>Item:</b>
                {parcel.item}
              </div>
              <div className="parcel-details__item">
                <b>Destination:</b>
                {parcel.destination}
              </div>
              <div className="parcel-details__item">
                <b>Schedule:</b>
                {parcel.schedule}
              </div>
              <div className="parcel-details__item">
                <b>Pickup Location:</b>
                {parcel.pickup_location}
              </div>
              <div className="parcel-details__item">
                <b>Present Location:</b>
                {parcel.present_location}
              </div>
              <div className="parcel-details__item">
                <b>Price:</b>
                &#8358;
                {parcel.price}
              </div>
              <div className="parcel-details__item">
                <b>Status:</b>
                {parcel.order_status}
              </div>
              <div className="parcel-details__item">
                <b>Date created:</b>
                {parcel.date_created}
              </div>
            </div>
          </div>
        )}
        <Modal isOpen={modalIsOpen} className="Modal" overlayClassName="Overlay">
          <ChangeDestination handleCancel={this.handleCancel} />
        </Modal>
      </Fragment>
    );
  }
}

ParcelDetails.propTypes = {
  fetchParcelDetails: PropTypes.func,
  match: PropTypes.shape(),
  isProcessing: PropTypes.bool,
  parcel: PropTypes.shape(),
};

const mapStateToProps = ({ parcel: { isProcessing, parcel } }) => ({ isProcessing, parcel });

const mapDispatchToProps = dispatch => ({
  fetchParcelDetails: parcelId => dispatch(getUsersParcelDetails(parcelId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ParcelDetails));
