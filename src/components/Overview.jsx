import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MDSpinner from "react-md-spinner";
import userOverviewRequest from "../actions/creators/overviewActions";

import "../styles/Overview.css";

class Overview extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const {
      isFetching, payload: {
        totalParcelOrder,
        totalDeliveredParcel,
        totalPendingParcel,
      },
    } = this.props;
    return (
      <div>
        <div className="row heading">
          <h2>Overview</h2>
        </div>
        <div className="row">
          <div className="col-4 col-s-4">
            <div className="card">
              <p className="title">Parcel Order Created</p>
              <hr />
              <p className="count" id="orders">
                {isFetching ? <MDSpinner /> : totalParcelOrder}
              </p>
            </div>
          </div>
          <div className="col-4 col-s-4">
            <div className="card">
              <p className="title">Delivered Parcel Order</p>
              <hr />
              <p className="count" id="delivered">
                {isFetching ? <MDSpinner /> : totalDeliveredParcel}
              </p>
            </div>
          </div>
          <div className="col-4 col-s-4">
            <div className="card">
              <p className="title">Pending Parcel Order</p>
              <hr />
              <p className="count" id="transit">
                {isFetching ? <MDSpinner /> : totalPendingParcel}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Overview.propTypes = {
  fetchData: PropTypes.func,
  isFetching: PropTypes.bool,
  payload: PropTypes.shape(),
};

const mapStateToProps = ({ overView: { isFetching, payload } }) => ({
  isFetching,
  payload,
});

const mapDispatchToProps = dispatch => ({ fetchData: () => dispatch(userOverviewRequest()) });

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
