import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { PageHeader } from "../components/NavBar";
import Footer from "../components/Footer";
import Logo from "../assets/logo2.png";

import "../styles/SignInPage.css";

const SignInPage = () => {
  return (
    <div className="row content">
      <PageHeader
        path="/signup"
        classId="sign-up"
        text="SIGN UP"
        className="fa fa-user-plus"
      />
      <div className="main content form-bg">
        <div className="logo-container">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <SignInForm />
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
