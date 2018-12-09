import React, { Component } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';

/** local component */
import Button from '../components/sharedComponents/Button';
import FormHeader from '../components/sharedComponents/FormHeader';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // onSubmit(event) {
  //   event.preventDefault();
  //   // console.log(this.nameInput.value, this.groupName.value);
  //   if (this.nameInput.value !== '') {
  //     this.props.addUser(this.nameInput.value);
  //   }
  //   this.nameInput.value = '';
  // }

  onSubmit(event) {
    event.preventDefault();
    if (this.props.value !== '') {
      this.props.addUser(event);
    } else {
      swal({
        text:'Please enter user name',
        icon: 'warning',
        button: 'Try again',
        dangerMode: true
      });
    }
  }

  render() {
    const { onChange, value, name } = this.props;
    return (
      <div className="card">
        <FormHeader className="card-header bg-info" displayText="Add User" />
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name={name}
                  placeholder="User name"
                  onChange={onChange}
                  value={value}
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
  onChange: PropTypes.func,
  value: PropTypes.string,
  addUser: PropTypes.func,
  name: PropTypes.string
};

export default AddUser;
