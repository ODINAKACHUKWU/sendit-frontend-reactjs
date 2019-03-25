import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import Input from "./common/Input";
import signupValidation from "../utils/validations/signUpValidation";
import { userAuthRequest } from "../actions/creators/authActions";

import "../styles/Input.css";

class SignUpForm extends Component {
  initialState = {
    userData: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      category: "Regular",
    },
    errors: {},
  };

  state = { ...this.initialState };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      ...prevState,
      userData: {
        ...prevState.userData,
        [name]: value,
      },
    }));
  };

  isValid = () => {
    const { userData } = this.state;
    const { errors, isValid } = signupValidation(userData);
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
    const { userData } = this.state;
    const { registerUser } = this.props;
    if (this.isValid()) {
      registerUser(userData).then(() => {
        const { isAuthenticated, history: { push } } = this.props;
        if (isAuthenticated) {
          push("/dashboard");
        }
      });
    }
  };

  render() {
    const {
      userData: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        confirmPassword,
      },
      errors,
    } = this.state;

    const { isProcessing } = this.props;

    return (
      <div className="form-container sign-up-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-title">
            <p>
              Please fill in this form to create your account and start making
              delivery order!
            </p>
          </div>
          <div>
            <label>
              <i className="fa fa-user" />
              First name
            </label>
            <Input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="Enter firstname"
              onChange={this.handleChange}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div>
            <label>
              <i className="fa fa-user" />
              Last name
            </label>
            <Input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Enter lastname"
              onChange={this.handleChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div>
            <label>
              <i className="fa fa-phone" />
              Phone number
            </label>
            <Input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              placeholder="Enter phone number"
              onChange={this.handleChange}
            />
            {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </div>
          <div>
            <label>
              <i className="fa fa-envelope" />
              Email
            </label>
            <Input
              type="text"
              name="email"
              value={email}
              placeholder="Enter email address"
              onChange={this.handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label>
              <i className="fa fa-unlock-alt" />
              Password
            </label>
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <label>
              <i className="fa fa-unlock-alt" />
              Confirm Password
            </label>
            <Input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <div>
            <button
              type="submit"
              className="sign-in-btn"
              disabled={isProcessing}
            >
              {isProcessing ? <MDSpinner /> : "SIGN UP"}
            </button>
          </div>
          <div className="form-footer">
            <p>
              Already have an account?
              {" "}
              <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  registerUser: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  history: PropTypes.shape(),
  isProcessing: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ auth: { isProcessing, isAuthenticated, error } }) => ({
  isProcessing,
  isAuthenticated,
  error,
});

const mapDispatchToProps = dispatch => ({
  registerUser: userData => dispatch(userAuthRequest(userData)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignUpForm),
);
