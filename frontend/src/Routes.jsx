import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HeroOne from "./pages/HeroOne";
import Shop from "./pages/Shop";
import ProductOne from "./pages/ProductOne";
import CartOne from "./pages/CartOne";
import CheckoutAddress from "./pages/CheckoutAddress";
import CheckoutShipping from "./pages/CheckoutShipping";
import CheckoutPayment from "./pages/CheckoutPayment";
import Reviews from "./pages/Reviews";
import ProductPageTwo from "./pages/ProductPageTwo";
import LoginEmail from "./pages/LoginEmail";
import CreateTenant from "./pages/CreateTenant";
import CreateUser from "./pages/CreateUser";
import CreateProduct from "./pages/CreateProduct";
import CreateAdmin from "./pages/CreateAdmin";
import ProtectedRoute from "./utils/protectedRoute";
import userStore from "./store/userStore";
const ProjectRoutes = () => {
  const { isAuthenticated } = userStore();
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "/heroone", element: <HeroOne /> },
    { path: "/shop", element: <Shop /> },
    { path: "/productone", element: <ProductOne /> },
    { path: "/cartone", element: <CartOne /> },
    { path: "/checkoutaddress", element: <CheckoutAddress /> },
    { path: "/checkoutshipping", element: <CheckoutShipping /> },
    { path: "/checkoutpayment", element: <CheckoutPayment /> },
    { path: "/reviews", element: <Reviews /> },
    { path: "/productpagetwo/:id", element: <ProductPageTwo /> },
    { path: "/loginemail", element: isAuthenticated ? <HeroOne /> :<LoginEmail /> },
    { path: "/createuser", element: <CreateUser /> },
    {
      path: "/createtenant",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <CreateTenant />
        </ProtectedRoute>
      ),
    },
    {
      path: "/createproduct",
      element: (
        <ProtectedRoute allowedRoles={["tenant"]}>
          <CreateProduct />
        </ProtectedRoute>
      ),
    },
    {
      path: "/createadmin",
      element: (
        <ProtectedRoute allowedRoles={["admin"]}>
          <CreateAdmin/>
        </ProtectedRoute>
      ),
    },
  ]);
  return element;
};
export default ProjectRoutes;
