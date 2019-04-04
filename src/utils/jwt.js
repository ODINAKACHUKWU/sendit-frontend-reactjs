import jwtDecode from "jwt-decode";

export default {
  decode: (token) => {
    return jwtDecode(token);
  },
};
