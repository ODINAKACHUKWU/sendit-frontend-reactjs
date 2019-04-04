import React from "react";
import PropTypes from "prop-types";

const Input = ({
  min, list, type, name, value, className, placeholder, onChange,
}) => {
  return (
    <input
      list={list}
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      min={min}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  list: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
