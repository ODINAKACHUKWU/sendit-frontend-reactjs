const BASE_URL = process.env.NODE_ENV !== "production"
  ? "http://localhost:3100/api/v1"
  : "https://solomon-sendit-api.herokuapp.com/api/v1";

export default BASE_URL;
