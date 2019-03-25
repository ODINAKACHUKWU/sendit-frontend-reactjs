import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SignUpForm from "../components/SignUpForm";
import { PageHeader } from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Logo from "../assets/logo2.png";

import "../styles/SignInPage.css";
import "../styles/SignUpPage.css";

class SignUpPage extends Component {
  handleClick = () => {
    const { history: { push } } = this.props;
    push("/signin");
  }

  render() {
    return (
      <div className="row content">
        <PageHeader
          type="button"
          text="SIGN IN"
          classId="sign-in"
          className="fa fa-sign-in"
          onClick={this.handleClick}
        />
        <div className="main content form-bg">
          <div className="signup-logo-container">
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <SignUpForm />
        </div>
        <Footer />
      </div>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape(),
};

export default SignUpPage;
