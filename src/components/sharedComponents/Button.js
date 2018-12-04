import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { displayText, className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick ? () => onClick() : undefined}
    >
      {displayText}
    </button>
  );
};

Button.propTypes = {
  displayText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
