import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** local component */
import Button from '../components/sharedComponents/Button';
import FormHeader from '../components/sharedComponents/FormHeader';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(this.nameInput.value, this.groupName.value);
    if (this.nameInput.value !== '') {
      this.props.addUser(this.nameInput.value);
    }
    this.nameInput.value = '';
  }

  // handleChange(event) {
  //   // this.setState({
  //   //   value: event.target.value
  //   // });

  //   console.log(this.groupName.value)
  // }

  render() {
    // const { groups } = this.props;
    return (
      <div className="card">
        <FormHeader className="card-header bg-custom" displayText="Add User" />
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  placeholder="user name"
                  ref={nameInput => (this.nameInput = nameInput)}
                  className="form-control"
                />
              </div>
              <Button
                displayText="Add User"
                className="btn btn-primary btn-sm"
              />
            </form>
          </ul>
        </div>
      </div>

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

AddUser.propTypes = {
  addUser: PropTypes.func,
  groups: PropTypes.array
};

export default AddUser;
