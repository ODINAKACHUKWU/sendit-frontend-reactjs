import HomePage from "../views/HomePage";
import SignInPage from "../views/SignInPage";
import SignUpPage from "../views/SignUpPage";
import OverviewPage from "../views/OverviewPage";
import ParcelOrderPage from "../views/ParcelOrderPage";
import CreateOrderPage from "../views/CreateOrderPage";
import ParcelDetailsPage from "../views/ParcelDetailsPage";
import CustomersPage from "../views/CustomersPage";
import CustomersOrdersPage from "../views/CustomersOrdersPage";
import CustomerDetailsPage from "../views/CustomerDetailsPage";
import NotFoundPage from "../views/NotFoundPage";

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
      path: "/overview",
      component: OverviewPage,
    },
    {
      path: "/orders",
      component: ParcelOrderPage,
    },
    {
      path: "/create-order",
      component: CreateOrderPage,
    },
    {
      path: "/parcel-details/:id",
      component: ParcelDetailsPage,
    },
    {
      path: "/customers",
      component: CustomersPage,
    },
    {
      path: "/customers-orders",
      component: CustomersOrdersPage,
    },
    {
      path: "/customer-details",
      component: CustomerDetailsPage,
    },
    {
      path: "*",
      component: NotFoundPage,
    },
  ],
};
