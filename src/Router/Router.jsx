import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile";
import ErrorPage from "../Pages/ErrorPage";
import Shop from "../Pages/Shop";
import ItemsByCategory from "../Pages/ItemsByCategory";
import Cart from "../Pages/Cart";
import CheckOutForm from "../Pages/Checkout/CheckOutForm";
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
  {
    element: <MainLayout></MainLayout>,
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        element: <HomeLayout></HomeLayout>,
        path: "/",
      },
      {
        element: <Login></Login>,
        path: "/login",
      },
      {
        element: <Register></Register>,
        path: "/register",
      },
      {
        element: <Shop></Shop>,
        path: "/shop",
      },
      {
        element: <ItemsByCategory></ItemsByCategory>,
        path: "/category/:categoryName",
      },
      {
        element: <Cart></Cart>,
        path: "/cart",
      },
      {
        element: <Checkout></Checkout>,
        path: "/checkout",
      },
      {
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
        path: "/profile",
      },
    ],
  },
]);

export default router;
