export default {
  setToken() {
    const token = localStorage.getItem("token");
    if (token) {
      return {
        headers: {
          "x-access-token": token,
        },
      };
    }
    return "No token provided";
  },
};
