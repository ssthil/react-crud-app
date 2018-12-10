import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
/** local component */
import Button from '../sharedComponents/Button';
import FormHeader from '../sharedComponents/FormHeader';

class AddGroup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.groupInput.value !== '') {
      this.props.addGroup(this.groupInput.value);
    } else {
      swal({
        text:'Please enter group name',
        icon: 'warning',
        button: 'Try again',
        dangerMode: true
      });
    }
    this.groupInput.value = '';
  }

  render() {
    // const { users } = this.props;
    return (
      <Fragment>
        <div className="card">
          <FormHeader displayText="Add Goup" className="card-header bg-info" />
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    placeholder="Group name"
                    ref={groupInput => (this.groupInput = groupInput)}
                    className="form-control"
                  />
                </div>
                <Button
                  displayText="Add Group"
                  className="btn btn-primary btn-sm"
                />
              </form>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

AddGroup.propTypes = {
  addGroup: PropTypes.func,
  users: PropTypes.array
};

export default AddGroup;
