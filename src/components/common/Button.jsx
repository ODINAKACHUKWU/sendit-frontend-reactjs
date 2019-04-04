import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  path, classId, text, className,
}) => {
  return (
    <Link to={path} id={classId}>
      {text}
      {" "}
      <i className={className} />
    </Link>
  );
};

Button.propTypes = {
  path: PropTypes.string.isRequired,
  classId: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
