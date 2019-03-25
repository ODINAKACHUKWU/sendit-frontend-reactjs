import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import toastr from "toastr";
import jwtDecode from "jwt-decode";
import "toastr/build/toastr.min.css";
import BaseRoute from "./routes/BaseRoute";
import store from "./store";
import auth from "./utils/auth";
import { userAuthSuccess } from "./actions/creators/authActions";

toastr.options = {
  showMethod: "slideDown",
  hideMethod: "slideUp",
  closeMethod: "slideUp",
  progressBar: true,
  closeButton: true,
  hideDuration: 500,
  positionClass: "toast-top-right",
  timeOut: 5000,
};

if (auth.authenticate()) {
  const token = localStorage.getItem("token");
  const user = jwtDecode(token);
  store.dispatch(userAuthSuccess(user));
}

const App = () => {
  return (
    <Provider store={store()}>
      <BaseRoute />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) module.hot.accept();
