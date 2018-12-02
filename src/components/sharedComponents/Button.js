import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { displayText, className } = props;
  return <button className={className}>{displayText}</button>;
};

Button.propTypes = {
  displayText: PropTypes.string,
  className: PropTypes.string
};

export default Button;
