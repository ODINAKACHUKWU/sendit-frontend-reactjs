import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { PageHeader } from "./NavBar";
import Footer from "./Footer";
import { Menu } from "./Menu";
import Overview from "../Overview";
import ParcelOrder from "../ParcelOrder";
import CreateOrder from "../CreateOrder";
import { userLogOutRequest } from "../../actions/creators/authActions";

import "../../styles/Dashboard.css";

class Dashboard extends Component {
  state = {
    activePage: "overview",
  }

  togglePage = (event) => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      activePage: event.target.id,
    }));
  }

  logOut = () => {
    const { logOutUser, history: { push } } = this.props;

    logOutUser().then(() => {
      push("/");
    });
  }

  render() {
    const { user: { fullName } } = this.props;
    const { activePage } = this.state;
    const user = `Welcome ${fullName}!`;
    return (
      <div className="row">
        <PageHeader
          type="button"
          text="Log Out"
          classId="logout-btn"
          className="fa fa-sign-out"
          user={user}
          onClick={this.logOut}
        />
        <div className="main">
          <div className="col-3 menu">
            <div className="dashboard-icon">
              <i className="fa fa-home" />
              {" "}
              Dashboard
            </div>
            <Menu togglePage={this.togglePage} />
          </div>
          <div className="col-9">
            {activePage === "overview" && <Overview />}
            {activePage === "orders" && <ParcelOrder />}
            {activePage === "create-order" && <CreateOrder />}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logOutUser: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  user: PropTypes.shape({
    fullName: PropTypes.string,
  }),
};

const mapStateToProps = ({
  auth: { isAuthenticated, user, error },
}) => ({
  isAuthenticated,
  user,
  error,
});

const mapDispatchToProps = dispatch => ({
  logOutUser: () => dispatch(userLogOutRequest()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dashboard),
);
