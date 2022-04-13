import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const {
      htmlFor,
      type,
      dataTestid,
      label,
      onChange,
      value,
      checked,
      disabled,
      onClick,
      className,
    } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        {label}
        <br />
        <input
          className={ className }
          data-testid={ dataTestid }
          type={ type }
          htmlFor={ htmlFor }
          onChange={ onChange }
          value={ value }
          checked={ checked }
          disabled={ disabled }
          onClick={ onClick }
        />
      </label>
    );
  }
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  dataTestid: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Input;
