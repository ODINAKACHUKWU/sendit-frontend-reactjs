import validator from "validator";
import isEmpty from "is-empty";

const signinValidation = (data) => {
  const {
    email,
    password,
  } = data;
  const errors = {};

  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  if (validator.isEmpty(trimmedEmail)) errors.email = "Email is required";

  if (validator.isEmpty(trimmedPassword)) errors.password = "Password is required";

  return { errors, isValid: isEmpty(errors) };
};

export default signinValidation;
