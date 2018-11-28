import React, { Component } from "react";

class GroupList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { groupName } = this.props;
    return (
      <li className="list-group-item">
        {groupName.capitalize()}
        <button className="btn btn-danger btn-sm float-right">Delete</button>
      </li>
    );
  }
}

export default GroupList;
