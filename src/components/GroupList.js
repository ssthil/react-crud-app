import React, { Component } from "react";

class GroupList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name } = this.props;
    return (
      <li className="list-group-item">
        {name.capitalize()}
        <button className="btn btn-danger btn-sm float-right">Delete</button>
      </li>
    );
  }
}

export default GroupList;
