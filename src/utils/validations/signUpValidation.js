/* eslint-disable max-len */
import validator from "validator";
import isEmpty from "is-empty";
import nameValidation from "./nameValidation";

const signupValidation = (data) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    confirmPassword,
  } = data;
  const errors = {};

  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();
  const trimmedPhoneNumber = phoneNumber.trim();
  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();
  const trimmedConfirmPassword = confirmPassword.trim();

  if (nameValidation.verifyName(trimmedFirstName, "f")) errors.firstName = nameValidation.verifyName(trimmedFirstName, "f");

  if (nameValidation.verifyName(trimmedLastName, "l")) { errors.lastName = nameValidation.verifyName(trimmedLastName, "l"); }

  if (!validator.isEmpty(trimmedPhoneNumber)) {
    if (!validator.isMobilePhone(trimmedPhoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
    }
  } else {
    errors.phoneNumber = "Phone number is required";
  }

  if (!validator.isEmpty(trimmedEmail)) {
    if (!validator.isEmail(trimmedEmail)) {
      errors.email = "Email is invalid";
    }
  } else {
    errors.email = "Email is required";
  }

  if (!validator.isEmpty(trimmedPassword)) {
    if (!validator.isLength(trimmedPassword, { min: 8, max: 30 })) {
      errors.password = "Password length must be between 8 and 30 characters";
    }
  } else {
    errors.password = "Password is required";
  }

  if (!validator.isEmpty(confirmPassword)) {
    if (!validator.equals(trimmedPassword, trimmedConfirmPassword)) {
      errors.confirmPassword = "Password mismatched";
    }
  } else {
    errors.confirmPassword = "Password confirmation is required";
  }

  return { errors, isValid: isEmpty(errors) };
};

export default signupValidation;
