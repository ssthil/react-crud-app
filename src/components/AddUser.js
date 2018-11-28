import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(this.nameInput.value, this.groupName.value);
    if(this.nameInput.value !== "") {
      this.props.addUser(this.nameInput.value, this.groupName.value);
    }
    this.nameInput.value = "";
  }

  // handleChange(event) {
  //   // this.setState({
  //   //   value: event.target.value
  //   // });

  //   console.log(this.groupName.value)
  // }

  render() {
    const { groups } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            placeholder="user name"
            ref={nameInput => (this.nameInput = nameInput)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            // onChange={this.handleChange}
            // value={this.state.value}
            ref={select => this.groupName = select}
            name="groupName"
          >
            {groups.map(group => (
              <option
                ref={groupInput => (this.groupInput = groupInput)}
                value={group.group_id}
                key={group.name}
              >
                {group.name.capitalize()}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary btn-md">Add User</button>
      </form>
      /*<form onSubmit={this.onSubmit}>
        <h4>Add User</h4>
        <div className="form-group">
          <input
            placeholder="User"
            ref={nameInput => (this.nameInput = nameInput)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Role"
            ref={roleInput => (this.roleInput = roleInput)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Group"
            ref={groupInput => (this.groupInput = groupInput)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Add User</button>
        <hr />
      </form>
    */
    );
  }
}

export default AddUser;
