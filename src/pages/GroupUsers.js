import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** local components */
import AssignUser from '../components/AssignUser';
// import FormHeader from '../components/sharedComponents/FormHeader';
// const users = [
//   { name: 'senthil', id: 1},
//   { name: 'sabari', id: 2}
// ];
// const groups = [
//   { name: 'devops', id: 1}
// ];

class AssignUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: JSON.parse(localStorage.getItem('users')),
      groups: JSON.parse(localStorage.getItem('groups'))
    };
  }

  render() {
    const { users, groups } = this.state;
    // console.log(assignedUsers);
    return (
      <AssignUser users={users} groups={groups} />
      /*<div className="container-fluid">
        <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-12">

          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="card">
              <FormHeader displayText="Goup Lists" className="card-header" />
            </div>
          </div>

        </div>
      </div>
    */
    );
  }
}

AssignUsers.propTypes = {
  assignedUsers: PropTypes.array,
  users: PropTypes.array,
  groups: PropTypes.array,
  handleChangeGroup: PropTypes.func,
  handleChangeUser: PropTypes.func
};

export default AssignUsers;
