import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import Input from "./common/Input";
import signinValidation from "../utils/validations/signInValidation";
import { userAuthRequest } from "../actions/creators/authActions";

import "../styles/Input.css";

class SignInForm extends Component {
  initialState = {
    userData: {
      email: "",
      password: "",
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
    const { errors, isValid } = signinValidation(userData);
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
    const { loginUser } = this.props;
    if (this.isValid()) {
      loginUser(userData).then(() => {
        const { isAuthenticated, history: { push }, user } = this.props;
        if (isAuthenticated) {
          if (user.category !== "Admin") {
            push("/overview");
          } else {
            push("/customers");
          }
        }
      });
    }
  };

  render() {
    const {
      userData: { email, password },
      errors,
    } = this.state;

    const { isProcessing } = this.props;

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-title">
            <p>Log in to your account</p>
          </div>
          <div className="input-group">
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
            {errors.email && (
              <span className="error">
                <i className="fa fa-exclamation-circle" />
                {errors.email}
              </span>
            )}
          </div>
          <div className="input-group">
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
            {errors.password && (
              <span className="error">
                <i className="fa fa-exclamation-circle" />
                {errors.password}
              </span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="sign-in-btn"
              disabled={isProcessing}
            >
              {isProcessing ? <MDSpinner /> : "SIGN IN"}
            </button>
          </div>
          <div className="form-footer">
            <p>
              Don't have an account?
              {" "}
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

SignInForm.propTypes = {
  loginUser: PropTypes.func,
  history: PropTypes.shape(),
  isAuthenticated: PropTypes.bool,
  isProcessing: PropTypes.bool.isRequired,
  user: PropTypes.shape(),
};

const mapStateToProps = ({
  auth: {
    isProcessing, isAuthenticated, user, error,
  },
}) => ({
  isProcessing,
  isAuthenticated,
  user,
  error,
});

const mapDispatchToProps = dispatch => ({
  loginUser: userData => dispatch(userAuthRequest(userData)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignInForm),
);
