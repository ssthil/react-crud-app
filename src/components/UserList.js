import React, { Component } from 'react';
import PropTypes from 'prop-types';
/** local component */
// import TableBody from "../components/TableBody";

class UserList extends Component {
  // constructor(props) {
    // super(props);
    // this.onUserSubmit = this.onUserSubmit.bind(this);
    // this.editUser = this.editUser.bind(this);
    // this.deleteUser = this.deleteUser.bind(this);
  // }

  /*onUserSubmit(event) {
    event.preventDefault();
    // console.log(this.nameInput.value, this.groupInput.value);
    this.props.addUser(this.nameInput.value, this.groupInput.value);

    this.nameInput.value = "";
    this.groupInput.value = "";
  }

  editUser() {
    // console.log("edit");
  }

  deleteUser() {
    const { deleteUser, name } = this.props;
    deleteUser(name);
    // console.log(this.props.name)
  }

  <li className="list-group-item">
        {name.capitalize()}
        <button className="btn btn-danger btn-sm float-right">Delete</button>
      </li>
*/
  render() {
    const { name, desc } = this.props;

    return (
      <div className="col-lg-4 col-md-4 col-sm-6">
        <div className="card">
          <div className="card-body">
            <img src="https://via.placeholder.com/100x120/d6e3f1/ffffff" />
            <div className="content-section">
              <h5>{name.capitalize()}</h5>
              <p>{desc}</p>
            </div>
            <button className="btn btn-danger btn-sm btn-custom">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string
};
export default UserList;
