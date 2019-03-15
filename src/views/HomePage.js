import React, { Component } from "react";
import Header from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/common/Button";
import "../styles/App.css";

const HomePage = () => {
  return (
    <div className="row content">
      <Header />
      <div className="main content">
        <div className="col-6">
          <h1>Courier Services</h1>
          <p>
            SendIT is a courier service that helps users deliver parcels to
            different destinations. Courier quotes are based on weight
            categories.
          </p>
          <Button path="/"
            classId={"sign-up"}
            text={"SIGN UP"}
            className={"fa fa-sign-in"}/>
        </div>
        <div className="col-6">
          <img src="src/assets/home.png" alt="Happy client" className="home" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
