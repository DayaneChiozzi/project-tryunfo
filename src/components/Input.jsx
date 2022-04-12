import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { htmlFor, type, dataTestid, label } = this.props;
    return (
      <label htmlFor={ htmlFor }>
        {label}
        <input data-testid={ dataTestid } type={ type } htmlFor={ htmlFor } />
      </label>
    );
  }
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]).isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default Input;
