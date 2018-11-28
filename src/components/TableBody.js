import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ id, name, role, group, editUser, deleteUser }) => (
  <tbody>
    <tr>
      <td>{id}</td>
      <td>{name.capitalize()}</td>
      <td>{role.capitalize()}</td>
      <td>{group.capitalize()}</td>
      <td className="action-section">
        <button onClick={editUser} className="btn btn-info">
          Edit
        </button>
        <button onClick={deleteUser} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
);

TableBody.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  role: PropTypes.string,
  group: PropTypes.string,
  editUser: PropTypes.func,
  deleteUser: PropTypes.func
};

export default TableBody;
