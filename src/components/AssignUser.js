import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/** local component */
import Button from '../components/sharedComponents/Button';
import FormHeader from '../components/sharedComponents/FormHeader';

class AssignUser extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      assignedUsers: [
        {
          group: this.props.groups[0].name,
          users: [this.props.users[0].name]
        }
      ],
      user: this.props.users[0].name,
      group: this.props.groups[0].name,
      msg: ''
    };

    this.handleChangeGroup = this.handleChangeGroup.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const userName = this.state.user;
    const groupName = this.state.group;

    const incomingList = {
      group: groupName,
      user: userName
    };
    // console.log(this.state.assignedUsers);
    const groupExist = this.state.assignedUsers.some(
      grp => grp.group === incomingList.group
    );

    const newList = groupExist
      ? this.state.assignedUsers.map(grp => {
          if (grp.group === incomingList.group) {
            return {
              ...grp,
              users: [...grp.users, incomingList.user]
            };
          } else {
            return grp;
          }
        })
      : [
          ...this.state.assignedUsers,
          {
            group: incomingList.group,
            users: [incomingList.user]
          }
        ];

    this.setState({
      assignedUsers: newList
    });

    /*
    var assignedObject = {
      groupObj: {
        name: groupName,
        userList: []
      }
    };

    if (assignedObject.groupObj.userList.indexOf(userName) === -1) {
      assignedObject.groupObj.userList.push(userName);
    }

    if (
      this.state.assignedUsers.some(
        obj =>
          obj.groupObj.name === groupName &&
          assignedObject.groupObj.userList.indexOf(userName) !== -1
      )
    ) {
      this.setState({ msg: 'user and group combination are already existed' });
      return false;
    } else {
      assignedObject.groupObj.name = groupName;
      if (assignedObject.groupObj.userList.indexOf(userName) === -1) {
        assignedObject.groupObj.userList.push(userName);
      }
      this.setState({ msg: '' });
    }
    // this.setState({
    //   assignedUsers: [...this.state.assignedUsers, assignedObject]
    // });
    */
  }

  handleChangeGroup(event) {
    this.setState({
      group: event.target.value
    });
  }

  handleChangeUser(event) {
    this.setState({
      user: event.target.value
    });
  }

  onDelete(user) {
    var users, group;
    this.state.assignedUsers.forEach(function(grp) {
      users = grp.users;
      group = grp.group;
    });
    // users.filter(user => user !=="us2");

    var toRemove = user;
    var index = users.indexOf(toRemove);
    users.splice(index, 1);
    // console.log(users);

    this.setState({
      assignedUsers: [{ group: group, users: users }]
    });
  }

  render() {
    // console.log({ GROUP: this.state.group, USER: this.state.user });
    // console.log(this.state.assignedUsers);
    // console.log(this.state.assignedUsers);
    const { users, groups } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <FormHeader
                displayText="Assign User"
                className="card-header bg-custom-orange"
              />
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Group</label>
                    <select
                      className="form-control"
                      name="groupName"
                      value={this.state.group}
                      onChange={this.handleChangeGroup}
                    >
                      {groups.map((group, index) => (
                        <option value={group.name} key={index}>
                          {group.name.capitalize()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>User</label>
                    <select
                      className="form-control"
                      name="userName"
                      value={this.state.user}
                      onChange={this.handleChangeUser}
                    >
                      {users.map(user => (
                        <option value={user.name} key={user.id}>
                          {user.name.capitalize()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button
                    displayText="Assign User"
                    className="btn btn-success btn-sm"
                  />
                </form>
              </div>
            </div>
          </div>
          {/** List*/}
          <div className="col-lg-9 col-md-8 col-sm-12 user-group-pist">
            <div className="card">
              <FormHeader displayText="Goup Lists" className="card-header" />
              {this.state.msg !== '' && (
                <div className="alert alert-warning">{this.state.msg}</div>
              )}
              <div className="card-body">
                {this.state.assignedUsers.length > 0 ? (
                  this.state.assignedUsers.map((item, index) => (
                    <li key={index} className="list-group-item">
                      {item.group.capitalize()}
                      <hr />
                      {/*console.log(item.groupName.userList)*/}
                      {item.users.map((user, j) => (
                        <div
                          className="badge badge-pill badge-info badge-custom"
                          key={j}
                        >
                          {user}
                          <span>
                            {' '}
                            {/*onClick={() => this.onDelete(user)}>*/}X
                          </span>
                        </div>
                      ))}
                    </li>
                  ))
                ) : (
                  <div className="alert alert-info">
                    Yet to assign user to the group!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AssignUser.propTypes = {
  users: PropTypes.array,
  groups: PropTypes.array,
  handleChangeGroup: PropTypes.func
};

export default AssignUser;
