import React from "react";

const FormField = ({ type, name, value, className, placeholder, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormField;
