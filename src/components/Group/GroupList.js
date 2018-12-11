import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({ groupName, onDelete }) => (
  <li className="list-group-item">
    {groupName.capitalize()}
    <button className="btn btn-danger btn-sm float-right" onClick={onDelete}>
      Delete
    </button>
  </li>
);

GroupList.propTypes = {
  groupName: PropTypes.string,
  userName: PropTypes.string,
  onDelete: PropTypes.func
};

export default GroupList;
