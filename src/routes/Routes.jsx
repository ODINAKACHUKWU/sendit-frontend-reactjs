import HomePage from "../views/HomePage";
import SignInPage from "../views/SignInPage";
import SignUpPage from "../views/SignUpPage";
import DashboardPage from "../views/DashboardPage";

import "../styles/Common.css";

export default {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage,
    },
    {
      path: "/signin",
      component: SignInPage,
    },
    {
      path: "/signup",
      component: SignUpPage,
    },
  ],
  secured: [
    {
      path: "/dashboard",
      component: DashboardPage,
    },
  ],
};
