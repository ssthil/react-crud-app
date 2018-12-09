import React, { Component } from 'react';

/** local components */
import GroupList from '../components/GroupList';
import AddGroup from '../components/AddGroup';
import FormHeader from '../components/sharedComponents/FormHeader';

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(localStorage.getItem('users')),
      groups: JSON.parse(localStorage.getItem('groups'))
    };

    this.addGroup = this.addGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  getUsers() {
    return this.state.users;
  }
  getGroups() {
    return this.state.groups;
  }
  /** add group */
  addGroup(name) {
    const groups = this.getGroups();
    const newGroup = {
      group_id: Math.max(...groups.map(group => group.group_id)) + 1, //groups.length + 1,
      name
    };
    groups.push(newGroup);
    localStorage.setItem('groups', JSON.stringify(groups));
    this.setState({
      groups
    });
  }

  deleteGroup(name) {
    const groups = this.getGroups();
    const filteredGroups = groups.filter(group => {
      return group.name !== name;
    });

    localStorage.setItem('groups', JSON.stringify(filteredGroups));
    this.setState({
      groups: filteredGroups
    });
  }
  /*
  getUsersAndgroup() {
    const users = this.getUsers();
    var userGroup = [],
      userName = [];
    var groupName = null;

    users.forEach(function(user) {
      function checkGroupName(val) {
        if (val) {
          return user.group_id == val.group_id;
        }
      }
      var groupIndex = groups.findIndex(checkGroupName);

      groupName = groups[groupIndex].name;
      userName.push(user.name);
      userGroup.push({
        groupName: groupName,
        userName: userName
      });
    });
    localStorage.setItem('userGroup', JSON.stringify(userGroup));
    this.setState({
      userGroup
    });
  }
*/
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <AddGroup addGroup={this.addGroup} />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="card">
              <FormHeader displayText="Goup Lists" className="card-header" />
              {this.state.groups.length > 0 ? (
                this.state.groups.map((group, index) => (
                  <GroupList
                    key={index}
                    groupName={group.name}
                    onDelete={this.deleteGroup}
                  />
                ))
              ) : (
                <div className="text text-danger no-records">
                  Group records are empty!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Groups;
