/* eslint-disable max-len */
import validator from "validator";
import isEmpty from "is-empty";
import nameValidation from "./nameValidation";

const parcelValidation = (data) => {
  const {
    firstName,
    lastName,
    first,
    last,
    item,
    quantity,
    size,
    senderStreet,
    senderCity,
    senderState,
    street,
    city,
    state,
    date,
    time,
  } = data;
  const errors = {};

  const trimmedFirstName = firstName.trim();
  const trimmedLastName = lastName.trim();
  const trimmedFirst = first.trim();
  const trimmedLast = last.trim();
  const trimmedItem = item.trim();
  const trimmedQuantity = quantity.trim();
  const trimmedSize = size.trim();
  const trimmedSenderStreet = senderStreet.trim();
  const trimmedSenderCity = senderCity.trim();
  const trimmedSenderState = senderState.trim();
  const trimmedStreet = street.trim();
  const trimmedCity = city.trim();
  const trimmedState = state.trim();
  const trimmedDate = date.trim();
  const trimmedTime = time.trim();

  if (nameValidation.verifyName(trimmedFirstName, "f")) errors.firstName = nameValidation.verifyName(trimmedFirstName, "f");

  if (nameValidation.verifyName(trimmedLastName, "l")) errors.lastName = nameValidation.verifyName(trimmedLastName, "l");

  if (nameValidation.verifyName(trimmedFirst, "f")) errors.first = nameValidation.verifyName(trimmedFirst, "f");

  if (nameValidation.verifyName(trimmedLast, "l")) { errors.last = nameValidation.verifyName(trimmedLast, "l"); }

  if (validator.isEmpty(trimmedItem)) {
    errors.item = "Item is required";
  }

  if (validator.isEmpty(trimmedSize)) {
    errors.size = "Size is required";
  }

  if (validator.isEmpty(trimmedSenderStreet)) {
    errors.senderStreet = "Street is required";
  }

  if (validator.isEmpty(trimmedSenderCity)) {
    errors.senderCity = "City is required";
  }

  if (validator.isEmpty(trimmedSenderState)) {
    errors.senderState = "State is required";
  }

  if (validator.isEmpty(trimmedStreet)) {
    errors.street = "Street is required";
  }

  if (validator.isEmpty(trimmedCity)) {
    errors.city = "City is required";
  }

  if (validator.isEmpty(trimmedState)) {
    errors.state = "State is required";
  }

  if (!validator.isEmpty(trimmedQuantity)) {
    if (!validator.isNumeric(trimmedQuantity)) {
      errors.quantity = "Quantity must be greater than or equal to 1";
    }
  } else {
    errors.quantity = "Quantity is required";
  }

  if (!validator.isEmpty(trimmedDate)) {
    if (validator.isBefore(trimmedDate)) {
      errors.date = "Date must be a future date";
    }
  } else {
    errors.date = "Date is required";
  }

  if (validator.isEmpty(trimmedTime)) {
    errors.time = "Time is required";
  }

  return { errors, isValid: isEmpty(errors) };
};

export default parcelValidation;
