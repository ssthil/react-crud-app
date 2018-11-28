import React, { Component } from 'react';
import PropTypes from 'prop-types';
/** local components */
import UserList from '../components/UserList';
import AddUser from '../components/AddUser';
/** data */
import users from '../data/users_data.json';
import groups from '../data/groups_data.json';

localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('groups', JSON.stringify(groups));

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(localStorage.getItem('users')),
      groups: JSON.parse(localStorage.getItem('groups')),
      desc: 'Lorem ipsum dolor sit amet, an modo deserunt per, ut vitae urbanitas consectetuer sed'
    };

    this.addUser = this.addUser.bind(this);
  }

  componentDidMount() {
    const users = this.getUsers();
    const groups = this.getGroups();
    // const userGroup = this.getUsersAndgroup();
    this.setState({ users, groups });

  }

  getUsers() {
    return this.state.users;
  }
  getGroups() {
    return this.state.groups;
  }

  /** add user */
  addUser(name, group_id) {
    const users = this.getUsers();

    const newUser = {
      id: Math.max(...users.map(user => user.id)) + 1,
      name: name,
      desc: this.state.desc,
      group_id: Number(group_id)
    };
    users.push(newUser);

    this.setState({
      users
    });

    // console.log(users);
  }

  getUsersAndgroup() {
    var userGroup = [];

    users.forEach(function(user) {
      function checkGroupName(val) {
        if(val){return user.group_id == val.group_id;}
      }

      var groupIndex = groups.findIndex(checkGroupName);

      userGroup.push({
        userName: user.name,
        groupName: groups[groupIndex].name
      });

      userGroup;
      // console.log(`${user.name} - ${groups[groupIndex].name}`)
    });

    // console.log('List: ',userGroup);
  }

  render() {
    // const { users, groups } = this.state;
    // const { name, groups } = this.props;

    return (
      <div className="container-fluid">
        <div className="row user-list">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <div className="card-header bg-custom"> Add User </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <AddUser groups={this.state.groups} addUser={this.addUser} />
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="row">
              {/*<div className="card">
              <div className="card-header">User Lists</div> */}
              {this.state.users.length > 0 ? (
                this.state.users.map(user => (
                  <UserList key={ user.id } name={ user.name } desc={ user.desc } />
                ))
              ) : (
                <div className="alert alert-danger">No Records!</div>
              )}
            </div>
          </div>
          {/*</div> */}
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  name: PropTypes.string,
  groups: PropTypes.array
};

export default Users;
