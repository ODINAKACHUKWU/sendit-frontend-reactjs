import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MDSpinner from "react-md-spinner";

import "../../styles/ParcelCard.css";
import { getUserParcelsRequest } from "../../actions/creators/parcelActions";

class ParcelCard extends Component {
  componentDidMount() {
    const { fetchParcels } = this.props;
    fetchParcels();
  }

  render() {
    const {
      isFetching, parcels,
    } = this.props;
    return (
      <Fragment>
        {isFetching ? <MDSpinner />
          : (
            <div>
              {parcels.map(parcel => (
                <Link to={`/parcel-details/${parcel.id}`}>
                  <div className="card-container">
                    <div className="card-container__items">
                      <span>
                        <b>Parcel ID:</b>
                        {parcel.id}
                      </span>
                      <span>
                        <b>Item:</b>
                        {parcel.item}
                      </span>
                    </div>
                    <div className="card-container__items">
                      <span>
                        <b>Receiver:</b>
                        {parcel.receiver}
                      </span>
                      <span>
                        <b>Schedule:</b>
                        {parcel.schedule}
                      </span>
                    </div>
                    <div className="card-container__items">
                      <span>
                        <b>Present Location:</b>
                        {parcel.present_location}
                      </span>
                      <span>
                        <b>Status:</b>
                        {parcel.order_status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
      </Fragment>
    );
  }
}

ParcelCard.propTypes = {
  fetchParcels: PropTypes.func,
  isFetching: PropTypes.bool,
  parcels: PropTypes.shape(),
};

const mapStateToProps = ({ parcel: { isFetching, parcels } }) => ({
  isFetching,
  parcels,
});

const mapDispatchToProps = dispatch => ({
  fetchParcels: () => dispatch(getUserParcelsRequest()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParcelCard);
