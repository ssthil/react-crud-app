import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { displayText, className, onClick, disabled } = props;
  return (
    <button
      className={className}
      onClick={onClick ? () => onClick() : undefined}
      disabled={disabled ? disabled : undefined}
    >
      {displayText}
    </button>
  );
};

Button.propTypes = {
  displayText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default Button;
