import React, { Component } from 'react';
import PropTypes from 'prop-types';
/** local components */
import FormHeader from '../components/sharedComponents/FormHeader';
import UserList from '../components/User/UserList';
import AddUser from '../components/User/AddUser';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(localStorage.getItem('users')),
      groups: JSON.parse(localStorage.getItem('groups')),
      desc:
        'Lorem ipsum dolor sit amet, an modo deserunt per, ut vitae urbanitas consectetuer sed'
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
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
    localStorage.setItem('users', JSON.stringify(users));
    this.setState({
      users
    });
  }

  deleteUser = (name) =>{
    const users = this.getUsers();
    const filteredUsers = users.filter(user => {
      return user.name !== name;
    });

    localStorage.setItem('users', JSON.stringify(filteredUsers));
    this.setState({
      users: filteredUsers
    });
  }

  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <AddUser addUser={this.addUser} />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="card">
              <FormHeader displayText="User Lists" className="card-header" />
              <div className="row user-list">
                {this.state.users.length > 0 ? (
                  this.state.users.map(user => (
                    <UserList
                      key={user.id}
                      name={user.name}
                      desc={user.desc}
                      onDelete={() => this.deleteUser(user.name)}
                    />
                  ))
                ) : (
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="text text-danger no-records">
                      User records are empty!
                    </div>
                  </div>
                )}
              </div>
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
