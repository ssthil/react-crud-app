import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/** local component */
import Button from '../components/sharedComponents/Button';
import FormHeader from '../components/sharedComponents/FormHeader';
/** utils */
import { avoidDuplicateEntry } from '../utils';

/** <select> option for no records</select> */
const SelectOptionEmpty = props => {
  const { name, optionValue } = props;
  return (
    <select disabled className="form-control" name={name}>
      <option>{optionValue}</option>
    </select>
  );
};

const SelectOption = props => {
  const { name, value, onChange, groups } = props;
  const optionText = () => {
    return(
      groups.map((group, index) => (
        <option value={group.name} key={index}>
          {group.name.capitalize()}
        </option>
      ))
    );
  };
  return (
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    >
      {optionText()}
    </select>
  );
};

const MessageBox = () => (
  <div className="alert alert-info">Yet to assign user to the group!</div>
);

class AssignUser extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      assignedUsers: JSON.parse(localStorage.getItem('assignedUsers')) || [],
      user: this.props.users.length > 0 ? this.props.users[0].name : 'No user',
      group:
        this.props.groups.length > 0 ? this.props.groups[0].name : 'No group'
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

    const checkGroupExist = this.state.assignedUsers.some(
      grp => grp.group === incomingList.group
    );

    // let groupExist = ;

    const newList = checkGroupExist
      ? this.state.assignedUsers.map(grp => {
          if (grp.group === incomingList.group) {
            return {
              ...grp,
              users: avoidDuplicateEntry(grp.users, incomingList.user)
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

    localStorage.setItem('assignedUsers', JSON.stringify(newList));
    this.setState({
      assignedUsers: newList
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
    const { users, groups } = this.props;
    const { assignedUsers } = this.state;

    const GroupUserList = () =>
      assignedUsers.map((item, index) => (
        <li key={index} className="list-group-item">
          {item.group.capitalize()}
          <hr />
          {/*console.log(item.groupName.userList)*/}
          {item.users.map((user, ind) => (
            <div className="badge badge-pill badge-info badge-custom" key={ind}>
              {user}
              <span>X</span>
            </div>
          ))}
        </li>
      ));

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
              <FormHeader
                displayText="Assign User"
                className="card-header bg-custom-header"
              />
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Group</label>
                    {groups.length === 0 ? (
                      <SelectOptionEmpty
                        optionValue="No groups"
                        name="groupName"
                      />
                    ) : (
                      <SelectOption
                        name="groupName"
                        value={this.state.group}
                        onChange={this.handleChangeGroup}
                        {...this.props}
                      />
                    )}
                  </div>
                  <div className="form-group">
                    <label>User</label>
                    {users.length === 0 ? (
                      <SelectOptionEmpty
                        optionValue="No users"
                        name="userName"
                      />
                    ) : (
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
                    )}
                  </div>
                  {groups.length === 0 || users.length === 0 ? (
                    <Button
                      displayText="Assign User"
                      className="btn btn-warning btn-sm"
                      disabled
                    />
                  ) : (
                    <Button
                      displayText="Assign User"
                      className="btn btn-warning btn-sm"
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
          {/** List*/}
          <div className="col-lg-9 col-md-8 col-sm-12 user-group-list">
            <div className="card">
              <FormHeader displayText="Goup Lists" className="card-header" />
              <div className="card-body">
                {assignedUsers.length > 0 ? <GroupUserList /> : <MessageBox />}
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

SelectOptionEmpty.propTypes = {
  name: PropTypes.string,
  optionValue: PropTypes.string
};

SelectOption.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  groups: PropTypes.array
};

export default AssignUser;
