import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SignInForm from "../components/SignInForm";
import { PageHeader } from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Logo from "../assets/logo2.png";

import "../styles/SignInPage.css";

class SignInPage extends Component {
  handleClick = () => {
    const { history: { push } } = this.props;
    push("/signup");
  }

  render() {
    return (
      <div className="row content">
        <PageHeader
          type="button"
          text="SIGN UP"
          classId="sign-up"
          className="fa fa-user-plus"
          onClick={this.handleClick}
        />
        <div className="main form-bg">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
          </div>
          <SignInForm />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  history: PropTypes.shape(),
};

export default SignInPage;
