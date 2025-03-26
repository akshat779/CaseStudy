import React from "react";
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
import SignUpEmailPage from "./pages/SignUpEmail";
const ProjectRoutes = () => {
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
    { path: "/productpagetwo", element: <ProductPageTwo /> },
    { path: "/loginemail", element: <LoginEmail /> },
    { path: "/signupemail", element: <SignUpEmailPage /> },
  ]);
  return element;
};
export default ProjectRoutes;
