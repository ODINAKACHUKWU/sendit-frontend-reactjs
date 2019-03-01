import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, classId, text, className }) => {
  return (
    <Link to={path} id={classId}>
      {text} <i className={className} />
    </Link>
  );
};

export default Button;
