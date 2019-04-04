import validator from "validator";

export default {
  verifyName: (nameField, identifier) => {
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
  },
};
