import React from 'react';
import PropTypes from 'prop-types';
/** local component */
// import TableBody from "../components/TableBody";

const UserList = ({ name, desc, onDelete }) => (
  <div className="col-lg-4 col-md-4 col-sm-6">
    <div className="card">
      <div className="card-body">
        <img src="https://via.placeholder.com/100x120/d6e3f1/ffffff" />
        <div className="content-section">
          <h5>{name.capitalize()}</h5>
          <p>{desc}</p>
        </div>
        <button className="btn btn-danger btn-sm btn-custom" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  </div>
);

UserList.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  onDelete: PropTypes.func
};
export default UserList;
