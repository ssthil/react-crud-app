import React, {  PureComponent } from 'react';
import PropTypes from 'prop-types';

class GroupList extends PureComponent {

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

GroupList.propTypes = {
  groupName: PropTypes.string
};

export default GroupList;
