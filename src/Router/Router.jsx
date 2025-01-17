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
import Checkout from "../Pages/Checkout/Checkout";
import Invoice from "../Pages/Checkout/Invoice";
import Dashboard from "../Layout/Dashboard";
import AdminDashboard from "../Dashboard/Admin/AdminDashboard";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import SellerDashboard from "../Dashboard/Seller/SellerDashboard";
import UserDashboard from "../Dashboard/User/UserDashboard";
import ManageUser from "../Dashboard/Admin/ManageUser";

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
        path: "/items/:categoryName",
      },
      {
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
        path: "/cart",
      },
      {
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        path: "/checkout",
      },
      {
        element: (
          <PrivateRoute>
            <Invoice></Invoice>
          </PrivateRoute>
        ),
        path: "/invoice",
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

  // Dashboard Section
  {
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    path: "/dashboard",
    children: [
      {
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
        path: "",
      },
      {
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
        path: "manage-user",
      },
      {
        element: (
          <SellerRoute>
            <SellerDashboard></SellerDashboard>
          </SellerRoute>
        ),
        path: "seller",
      },
      {
        element:<UserDashboard></UserDashboard>,
        path:"user"
      }
    ],
  },
]);

export default router;
