import validator from "validator";
import isEmpty from "is-empty";

const destinationValidation = (destination) => {
  const { street, city, state } = destination;
  const errors = {};

  const trimmedStreet = street.trim();
  const trimmedCity = city.trim();
  const trimmedState = state.trim();

  if (validator.isEmpty(trimmedStreet)) {
    errors.street = "Street is required";
  }

  if (validator.isEmpty(trimmedCity)) {
    errors.city = "City is required";
  }

  if (validator.isEmpty(trimmedState)) {
    errors.state = "State is required";
  }

  return { errors, isValid: isEmpty(errors) };
};

export default destinationValidation;
