import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import Input from "./common/Input";
import parcelValidation from "../utils/validations/parcelValidation";

import "../styles/CreateOrder.css";
import "../styles/Input.css";
import createOrderRequest from "../actions/creators/parcelActions";
import updateParcelData from "../utils/updateParcelData";

class CreateOrder extends Component {
  initialState = {
    parcelData: {
      firstName: "",
      lastName: "",
      first: "",
      last: "",
      item: "",
      quantity: "",
      size: "",
      senderStreet: "",
      senderCity: "",
      senderState: "",
      street: "",
      city: "",
      state: "",
      date: "",
      time: "",
      status: "Not delivered",
    },
    errors: {},
  };

  state = { ...this.initialState };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      parcelData: {
        ...prevState.parcelData,
        [name]: value,
      },
    }));
  };

  isValid = () => {
    const { parcelData } = this.state;
    const { errors, isValid } = parcelValidation(parcelData);
    if (!isValid) {
      this.setState(prevState => ({
        ...prevState,
        errors,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        errors: {},
      }));
    }
    return isValid;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { parcelData } = this.state;
    const { createParcel } = this.props;
    const updatedParcelData = updateParcelData.updateData(parcelData);
    if (this.isValid()) {
      createParcel(updatedParcelData);
    }
  };

  render() {
    const {
      parcelData: {
        firstName,
        lastName,
        first,
        last,
        item,
        quantity,
        size,
        senderStreet,
        senderCity,
        senderState,
        street,
        city,
        state,
        date,
        time,
      },
      errors,
    } = this.state;

    const { isCreating } = this.props;

    return (
      <Fragment>
        <div className="row heading">
          <h2>Delivery Order Form</h2>
        </div>
        <div className="row order-form-container">
          <form onSubmit={this.handleSubmit}>
            <h2>Pickup Location</h2>
            <h3>Sender Info:</h3>
            <div className="row">
              <div className="col-12 col-s-12">
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-user" />
                    First name
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="Firstname"
                    onChange={this.handleChange}
                  />
                  {errors.firstName && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-user" />
                    Last name
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Lastname"
                    onChange={this.handleChange}
                  />
                  {errors.lastName && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <h3>Address:</h3>
            <div className="row">
              <div className="col-12 col-s-12">
                <label>
                  <i className="fa fa-map-marker" />
                  Street
                </label>
                <Input
                  type="text"
                  name="senderStreet"
                  value={senderStreet}
                  placeholder="Street"
                  onChange={this.handleChange}
                />
                {errors.senderStreet && (
                  <span className="error">
                    <i className="fa fa-exclamation-circle" />
                    {errors.senderStreet}
                  </span>
                )}
              </div>
              <div className="col-12 col-s-12">
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-home" />
                    City
                  </label>
                  <Input
                    type="text"
                    name="senderCity"
                    value={senderCity}
                    placeholder="City"
                    onChange={this.handleChange}
                  />
                  {errors.senderCity && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.senderCity}
                    </span>
                  )}
                </div>
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-institution" />
                    State
                  </label>
                  <Input
                    type="text"
                    name="senderState"
                    value={senderState}
                    placeholder="State"
                    onChange={this.handleChange}
                  />
                  {errors.senderState && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.senderState}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <h2>Destination</h2>
            <h3>Recipient Info:</h3>
            <div className="row">
              <div className="col-12 col-s-12">
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-user" />
                    First name
                  </label>
                  <Input
                    type="text"
                    name="first"
                    value={first}
                    placeholder="Firstname"
                    onChange={this.handleChange}
                  />
                  {errors.first && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.first}
                    </span>
                  )}
                </div>
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-user" />
                    Last name
                  </label>
                  <Input
                    type="text"
                    name="last"
                    value={last}
                    placeholder="Lastname"
                    onChange={this.handleChange}
                  />
                  {errors.last && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.last}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <h3>Address:</h3>
            <div className="row">
              <div className="col-12 col-s-12">
                <label>
                  <i className="fa fa-map-marker" />
                  Street
                </label>
                <Input
                  type="text"
                  name="street"
                  value={street}
                  placeholder="Street"
                  onChange={this.handleChange}
                />
                {errors.street && (
                  <span className="error">
                    <i className="fa fa-exclamation-circle" />
                    {errors.street}
                  </span>
                )}
              </div>
              <div className="col-12 col-s-12">
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-home" />
                    City
                  </label>
                  <Input
                    type="text"
                    name="city"
                    value={city}
                    placeholder="City"
                    onChange={this.handleChange}
                  />
                  {errors.city && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.city}
                    </span>
                  )}
                </div>
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-institution" />
                    State
                  </label>
                  <Input
                    type="text"
                    name="state"
                    value={state}
                    placeholder="State"
                    onChange={this.handleChange}
                  />
                  {errors.state && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.state}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <h2>Order Details</h2>
            <h3>Parcel Description:</h3>
            <div className="row">
              <div className="col-12 col-s-12">
                <div className="col-4 col-s-4">
                  <label>
                    <i className="fa fa-gift" />
                    Item
                  </label>
                  <Input
                    type="text"
                    name="item"
                    value={item}
                    placeholder="Item"
                    onChange={this.handleChange}
                  />
                  {errors.item && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.item}
                    </span>
                  )}
                </div>
                <div className="col-4 col-s-4">
                  <label>
                    <i className="fa fa-opencart" />
                    Quantity
                  </label>
                  <Input
                    type="number"
                    name="quantity"
                    value={quantity}
                    placeholder="Quantity"
                    min="1"
                    onChange={this.handleChange}
                  />
                  {errors.quantity && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.quantity}
                    </span>
                  )}
                </div>
                <div className="col-4 col-s-4">
                  <label>
                    <i className="fa fa-balance-scale" />
                    Size
                  </label>
                  <Input
                    type="text"
                    list="sizes"
                    name="size"
                    value={size}
                    placeholder="Size"
                    onChange={this.handleChange}
                  />
                  <datalist id="sizes">
                    <option value="Small" />
                    <option value="Medium" />
                    <option value="Large" />
                  </datalist>
                  {errors.size && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.size}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <h2>Schedule</h2>
            <h3>Pickup at:</h3>
            <div className="row">
              <div className="col-12 col-s-12">
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-calendar" />
                    Date
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={date}
                    placeholder="Date"
                    onChange={this.handleChange}
                  />
                  {errors.date && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.date}
                    </span>
                  )}
                </div>
                <div className="col-6 col-s-6">
                  <label>
                    <i className="fa fa-clock-o" />
                    Time
                  </label>
                  <Input
                    type="time"
                    name="time"
                    value={time}
                    placeholder="Time"
                    onChange={this.handleChange}
                  />
                  {errors.time && (
                    <span className="error">
                      <i className="fa fa-exclamation-circle" />
                      {errors.time}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="row btn-container">
              <button
                type="submit"
                className="sign-in-btn"
                id="create-order-btn"
                disabled={isCreating}
              >
                {isCreating ? <MDSpinner /> : "Create Order"}
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

CreateOrder.propTypes = {
  createParcel: PropTypes.func,
  isCreating: PropTypes.bool,
};

const mapStateToProps = ({ parcel: { isCreating, error } }) => ({
  isCreating,
  error,
});

const mapDispatchToProps = dispatch => ({
  createParcel: parcelData => dispatch(createOrderRequest(parcelData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrder);
