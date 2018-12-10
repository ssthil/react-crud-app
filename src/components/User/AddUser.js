import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

/** local component */
import Button from '../sharedComponents/Button';
import FormHeader from '../sharedComponents/FormHeader';

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
    } else {
      swal({
        text:'Please enter user name',
        icon: 'warning',
        button: 'Try again',
        dangerMode: true
      });
    }
    this.nameInput.value = '';
  }

  render() {
    // const { groups } = this.props;
    return (
      <div className="card">
        <FormHeader className="card-header bg-info" displayText="Add User" />
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  placeholder="User name"
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
    );
  }
}

AddUser.propTypes = {
  addUser: PropTypes.func,
  groups: PropTypes.array
};

export default AddUser;
