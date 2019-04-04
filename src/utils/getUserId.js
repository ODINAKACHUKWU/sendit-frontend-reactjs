import jwt from "./jwt";

export default {
  userId() {
    const token = localStorage.getItem("token");
    if (token) {
      const { userId } = jwt.decode(token);
      return userId;
    }
    return "No token provided";
  },
};
