/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "../pages/auth/sign_in";
import Home from "../pages/dashboard/home/home";
import CustomersPage from "../pages/dashboard/customers";
import TransactionsPage from "../pages/dashboard/transactions";
import CellsPage from "../pages/dashboard/cells";
import Cookies from "js-cookie";
import { useGetUsers } from "../helpers/request";

const RouteContainer = () => {
  const routes = [
    {
      title: "home",
      path: "/",
      component: <Home />,
    },
    {
      title: "customers",
      path: "/dashboard/customers",
      component: <CustomersPage />,
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
      component: <TransactionsPage />,
    },
    {
      title: "Cells",
      path: "/dashboard/cells",
      component: <CellsPage />,
    },
  ];

  const getUsersQuery = useGetUsers();
  //console.log(getUsersQuery)
  return (
    <Router>
      <Routes>
        {Cookies.get("_accessToken") ? (
          <>
            {routes.map((items, key) => (
              <Route key={key} path={items.path} element={items.component} />
            ))}
          </>
        ) : (
          <Route path="/" element={<SignIn />} />
        )}
      </Routes>
    </Router>
  );
};
export default RouteContainer;
