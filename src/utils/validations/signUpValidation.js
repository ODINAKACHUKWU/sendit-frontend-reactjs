import validator from "validator";
import isEmpty from "is-empty";

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

  const verifyName = (nameField, identifier) => {
    let nameInput = "First";
    let error = "";
    if (identifier.toLowerCase() === "l") nameInput = "Last";
    if (!validator.isEmpty(nameField)) {
      if (!validator.isAlpha(nameField)) {
        error = `${nameInput} name must contain only alphabets`;
      }
    } else {
      error = `${nameInput} name is required`;
    }
    return error;
  };

  if (verifyName(trimmedFirstName, "f")) errors.firstName = verifyName(trimmedFirstName, "f");

  if (verifyName(trimmedLastName, "l")) errors.lastName = verifyName(trimmedLastName, "l");

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
