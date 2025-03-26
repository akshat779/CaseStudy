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
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import ProductPageTwo from "./pages/ProductPageTwo";
import LoginEmail from "./pages/LoginEmail";
import HeroTwo from "./pages/HeroTwo";
import Simple from "./pages/Simple";
import SimpleOne from "./pages/SimpleOne";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "heroone", element: <HeroOne /> },
    { path: "shop", element: <Shop /> },
    { path: "productone", element: <ProductOne /> },
    { path: "cartone", element: <CartOne /> },
    { path: "checkoutaddress", element: <CheckoutAddress /> },
    { path: "checkoutshipping", element: <CheckoutShipping /> },
    { path: "checkoutpayment", element: <CheckoutPayment /> },
    { path: "login", element: <Login /> },
    { path: "reviews", element: <Reviews /> },
    { path: "productpagetwo", element: <ProductPageTwo /> },
    { path: "loginemail", element: <LoginEmail /> },
    { path: "herotwo", element: <HeroTwo /> },
    // { path: "shopone", element: <ShopOne /> },
    // { path: "footer", element: <Footer /> },
    { path: "simple", element: <Simple /> },
    { path: "simpleone", element: <SimpleOne /> },
  ]);
  return element;
};
export default ProjectRoutes;
