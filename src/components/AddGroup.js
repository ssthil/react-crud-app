import React, { Component } from "react";

class AddGroup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.groupInput.value === "") {
      console.log("Please ender group name");
    } else {
      // console.log(this.groupInput.value);
      this.props.addGroup(this.groupInput.value, this.userInput.value);
    }

    this.groupInput.value = "";
  }

  render() {
    const { users } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            placeholder="group name"
            ref={groupInput => (this.groupInput = groupInput)}
            className="form-control"
          />
        </div>
        <div className="form-group">
        <select
          className="form-control"
          // onChange={this.handleChange}
          // value={this.state.value}
          ref={select => this.userInput = select}
          name="userInput"
        >
          {users.map(user => (
            <option
              ref={userInput => (this.userInput = userInput)}
              value={user.group_id}
              key={user.id}
            >
              {user.name.capitalize()}
            </option>
          ))}
        </select>
      </div>

        <button className="btn btn-primary btn-sm">Add Group</button>
      </form>
    );
  }
}

export default AddGroup;
