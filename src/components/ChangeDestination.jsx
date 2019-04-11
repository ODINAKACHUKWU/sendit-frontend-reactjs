import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import MDSpinner from "react-md-spinner";
import { changeDestinationRequest } from "../actions/creators/parcelActions";
import Input from "./common/Input";
import destinationValidation from "../utils/validations/destinationValidation";
import updateParcelData from "../utils/updateParcelData";

import "../styles/ChangeDestination.css";

class ChangeDestination extends Component {
  initialState = {
    destination: {
      street: "",
      city: "",
      state: "",
    },
    errors: {},
  };

  state = { ...this.initialState };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      destination: {
        ...prevState.destination,
        [name]: value,
      },
    }));
  };

  isValid = () => {
    const { destination } = this.state;
    const { errors, isValid } = destinationValidation(destination);
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
    const { destination } = this.state;
    const updatedDestination = updateParcelData.updateDestination(destination);
    const {
      changeDestination,
      handleCancel,
      match: {
        params: { id },
      },
    } = this.props;
    if (this.isValid()) {
      changeDestination(updatedDestination, id).then(() => {
        handleCancel();
      });
    }
  };

  render() {
    const {
      destination: { street, city, state },
      errors,
    } = this.state;

    const { handleCancel, isProcessing } = this.props;

    return (
      <Fragment>
        <div>
          <i className="fa fa-times cancel" onClick={handleCancel} />
        </div>
        <div>
          <h3>Enter new destination</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
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
            <div className="col-12 col-s-12">
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
          <div>
            <button disabled={isProcessing}>
              {isProcessing ? <MDSpinner /> : "Change destination"}
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

ChangeDestination.propTypes = {
  changeDestination: PropTypes.func,
  handleCancel: PropTypes.func,
  match: PropTypes.shape(),
  isProcessing: PropTypes.bool,
};

const mapStateToProps = ({ isProcessing, parcel: { parcel } }) => ({
  isProcessing,
  parcel,
});

const mapDispatchToProps = dispatch => ({
  changeDestination: (destination, id) => dispatch(changeDestinationRequest(destination, id)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(ChangeDestination),
);
