import React from 'react';
import PropTypes from 'prop-types';

const FormHeader = props => {
  const { className, displayText } = props;
  return <div className={className}> {displayText}</div>;
};

FormHeader.propTypes = {
  className: PropTypes.string,
  displayText: PropTypes.string
};

export default FormHeader;
