import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import { PageHeader } from "../components/NavBar";
import Footer from "../components/Footer";
import Logo from "../assets/logo2.png";

import "../styles/SignInPage.css";
import "../styles/SignUpPage.css";

const SignUpPage = () => {
    return (
        <div className="row content">
            <PageHeader
                path="/signin"
                classId="sign-in"
                text="SIGN IN"
                className="fa fa-sign-in"
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
};

export default SignUpPage;
