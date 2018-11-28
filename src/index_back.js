import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
/** local components */
import TableHeader from "./components/TableHeader";
// import UserList from "./pages/UserList";
// import AddUser from "./components/AddUser";
import GroupList from "./pages/GroupList";
import AddGroup from "./components/AddGroup";
/** css */
import "./style.css";
/** data */
// import users from "./data/users_data.json";
// import groups from "./data/groups_data.json";
/** utils */
import "./utils";

/*
const users = [
  {
    name: "Senthil",
    age: 36
  },
  {
    name: "Surya",
    age: 30
  },
  {
    name: "Swasthika",
    age: 7
  }
];
*/
// localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem("groups", JSON.stringify(groups));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(localStorage.getItem("users")),
      groups: JSON.parse(localStorage.getItem("groups"))
    };

    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    // this.loadData = this.loadData.bind(this);
    this.addGroup = this.addGroup.bind(this);
  }

  componentDidMount() {
    const users = this.getUsers();
    const groups = this.getGroups();
    this.setState({ users, groups });
  }

  getUsers() {
    return this.state.users;
  }
  getGroups() {
    return this.state.groups;
  }
  /** add */
  addUser(name, group_id) {
    const users = this.getUsers();

    const newUser = {
      id: Math.max(...users.map(user => user.id)) + 1,
      name: name,
      group_id: Number(group_id)
    };
    users.push(newUser);

    this.setState({
      users
    });

    console.log(users);
  }
  /** user and group map */
  userAndGroup() {
    const users = this.getUsers();
    const groups = this.getGroups();

    const usergroup = [];
  }
  /** delete */
  deleteUser(name) {
    const users = this.getUsers();
    const filteredUsers = users.filter(user => {
      return user.name !== name;
    });

    console.log(filteredUsers);

    this.setState({ users: filteredUsers });
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

  loadData() {
    localStorage.setItem("users", JSON.stringify(data.users));
    this.setState({
      users: JSON.parse(localStorage.getItem("users"))
    });
  }

  render() {
    const { users, groups } = this.state;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-custom ">
          <div className="container">
            <span className="navbar-brand mb-0 h1">
              React User Management Application
            </span>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Users <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Groups
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">User Lists</div>
                {users.length > 0 ? (
                  users.map(user => <UserList key={user.id} name={user.name} />)
                ) : (
                  <div className="alert alert-danger">No Records!</div>
                )}
              </div>
            </div>
            {/** group list*/}
            <div className="col">
              <div className="card">
                <div className="card-header">Group Lists</div>
                {groups.length > 0 ? (
                  groups.map(group => (
                    <GroupList key={group.group_id} name={group.name} />
                  ))
                ) : (
                  <div className="alert alert-danger">No Records!</div>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header"> Add User </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <AddUser groups={groups} addUser={this.addUser} />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header"> Add Group </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <AddGroup addGroup={this.addGroup} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
      /*
        <div className="row">
          <div className="col-md-6">
            <AddUser addUser={this.addUser} />
            users.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-bordered">
                <TableHeader />
                {users.map(user => (
                  <UserList
                    key={user.name}
                    id={user.id}
                    name={user.name}
                    deleteUser={this.deleteUser}
                  />
                ))}
              </table>
            </div>
            ) : (
            <div>
              <div className="alert alert-danger">No Records!</div>
              <button onClick={this.loadData} className="btn btn-success">
                Load Data
              </button>
            </div>
            )
          </div>
          <div className="col-md-6">
            <AddUser addUser={this.addUser} />
            users.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-bordered">
                <TableHeader />
                {users.map(user => (
                  <UserList
                    key={user.name}
                    id={user.id}
                    group={user.group}
                    deleteUser={this.deleteUser}
                  />
                ))}
              </table>
            </div>
            ) : (
            <div>
              <div className="alert alert-danger">No Records!</div>
              <button onClick={this.loadData} className="btn btn-success">
                Load Data
              </button>
            </div>
            )
          </div>
          </div>*/
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
