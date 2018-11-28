import React from "react";

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

export default TableBody;
