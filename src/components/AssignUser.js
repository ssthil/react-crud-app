import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/** local component */
import Button from '../components/sharedComponents/Button';
import FormHeader from '../components/sharedComponents/FormHeader';

class AssignUser extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      assignedUsers: [],
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
    // const userName = this.state.user;
    const userName = this.state.user;
    const groupName = this.state.group;
    // var assignedObject = {};

    var assignedObject = { userName: userName, groupName: groupName };

    if (
      this.state.assignedUsers.some(
        obj => obj.groupName === groupName && obj.userName === userName
      )
    ) {
      this.setState({ msg: 'user and group combination are already existed' });
      return false;
    } else {
      assignedObject = { userName: userName, groupName: groupName };
      this.setState({ msg: '' });
    }

    this.setState({
      assignedUsers: [...this.state.assignedUsers, assignedObject]
    });
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

  onDelete(userName) {
    this.setState({
      assignedUsers: [...this.state.assignedUsers.filter(item => item.userName !== userName)]
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
                      {item.groupName.capitalize()}
                      <hr />
                      <div className="badge badge-pill badge-info badge-custom">
                        {item.userName}
                        <span onClick={() => this.onDelete(item.userName)}>X</span>
                      </div>
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
