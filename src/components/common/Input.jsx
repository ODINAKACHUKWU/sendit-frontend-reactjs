import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, name, value, className, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Input;
