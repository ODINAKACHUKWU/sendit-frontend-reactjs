import React from "react";
import Dashboard from "../components/common/Dashboard";
import CustomersList from "../components/CustomersList";

const CustomersPage = () => {
  return (
    <Dashboard>
      <CustomersList />
    </Dashboard>
  );
};

export default CustomersPage;
