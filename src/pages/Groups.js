import React, { Component } from "react";
/** local components */
import GroupList from "../components/GroupList";
import AddGroup from "../components/AddGroup";

import groups from "../data/groups_data.json";

localStorage.setItem("groups", JSON.stringify(groups));

class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: JSON.parse(localStorage.getItem("groups"))
    };

    this.addGroup = this.addGroup.bind(this);
  }

  componentDidMount() {
    const groups = this.getGroups();
    this.setState({ groups });
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
    // this.setState({  });
    this.setState({
      groups
    });
    console.log(groups);
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
                  <AddGroup addGroup={this.addGroup} />
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="card">
              <div className="card-header">Group Lists</div>
              {this.state.groups.length > 0 ? (
                this.state.groups.map(group => (
                  <GroupList key={group.group_id} name={group.name} />
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

export default Groups;
