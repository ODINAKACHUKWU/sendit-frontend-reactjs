import React from "react";
import { HomePageNavBar } from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import Button from "../components/common/Button";
import homeImg from "../assets/home.png";

import "../styles/Homepage.css";

const HomePage = () => {
  return (
    <div className="row content">
      <HomePageNavBar />
      <div className="main content">
        <div className="home-container">
          <div className="col-5 left">
            <h1>Courier Services</h1>
            <p>
              SendIT is a courier service that helps users deliver parcels to
              different destinations. Courier quotes are based on weight
              categories. Sign up to start enjoying our delivery service!
            </p>
            <Button
              path="/signup"
              classId="home-sign-up"
              text="SIGN UP"
              className="fa fa-user-plus"
            />
          </div>
          <div className="col-7">
            <img
              src={homeImg}
              alt="Happy client"
              className="home"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
