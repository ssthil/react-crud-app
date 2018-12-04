import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class GroupList extends PureComponent {
  render() {
    const { groupName, onDelete } = this.props;
    return (
      <li className="list-group-item">
        {groupName.capitalize()}
        {/*<span className="badge badge-primary badge-custom">{userName.capitalize()}</span>*/}
        <button
          className="btn btn-danger btn-sm float-right"
          onClick={() => onDelete(groupName)}
        >
          Delete
        </button>
      </li>
    );
  }
}

GroupList.propTypes = {
  groupName: PropTypes.string,
  userName: PropTypes.string,
  onDelete: PropTypes.func
};

export default GroupList;
