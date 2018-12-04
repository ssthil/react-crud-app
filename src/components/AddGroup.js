import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
/** local component */
import Button from '../components/sharedComponents/Button';
import FormHeader from '../components/sharedComponents/FormHeader';

class AddGroup extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.groupInput.value === '') {
      // console.log('Please ender group name');
    } else {
      // console.log(this.groupInput.value);
      this.props.addGroup(this.groupInput.value);
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
                    placeholder="group name"
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
