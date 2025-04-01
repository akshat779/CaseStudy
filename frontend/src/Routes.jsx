import { useRoutes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HeroOne from "./pages/HeroOne";
import Shop from "./pages/Shop";

import CartOne from "./pages/CartOne";
import ProductPageTwo from "./pages/ProductPageTwo";
import LoginEmail from "./pages/LoginEmail";
import CreateTenant from "./pages/CreateTenant";
import CreateUser from "./pages/CreateUser";
import CreateProduct from "./pages/CreateProduct";
import CreateAdmin from "./pages/CreateAdmin";
import OrderHistory from "./pages/OrderHistory";
import ProtectedRoute from "./utils/protectedRoute";
import userStore from "./store/userStore";
import MyProducts from "./pages/MyProducts";
const ProjectRoutes = () => {
  const { isAuthenticated } = userStore();
  let element = useRoutes([
    { path: "/", element: <HeroOne /> },
    { path: "*", element: <NotFound /> },
    { path: "/heroone", element: <HeroOne /> },
    { path: "/shop", element: <Shop /> },
    
    {
      path: "/cartone",
      element: (
        <ProtectedRoute allowedRoles={["user", "tenant"]}>
          <CartOne />
        </ProtectedRoute>
      ),
    },
    {
      path: "/orders",
      element: (
        <ProtectedRoute allowedRoles={["user", "tenant"]}>
          <OrderHistory />
        </ProtectedRoute>
      ),
    },

    {
      path: "/productpagetwo/:id",
      element: (
        <ProtectedRoute allowedRoles={["user"]}>
          <ProductPageTwo />
        </ProtectedRoute>
      ),
    },
    {
      path: "/loginemail",
      element: isAuthenticated ? <HeroOne /> : <LoginEmail />,
    },
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
          <CreateAdmin />
        </ProtectedRoute>
      ),
    },
    {
      path: "/myproducts",
      element: (
        <ProtectedRoute allowedRoles={["tenant"]}>
          <MyProducts />
        </ProtectedRoute>
      ),
    }
  ]);
  return element;
};
export default ProjectRoutes;
