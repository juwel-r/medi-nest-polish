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
import ManageUser from "../Dashboard/Admin/ManageUser";
import ManageCategory from "../Dashboard/Admin/ManageCategory";
import PaymentManagement from "../Dashboard/Admin/PaymentManagement";
import SalesReport from "../Dashboard/Admin/SalesReport";
import ManageBannerAdvertise from "../Dashboard/Admin/ManageBannerAdvertise";
import PaymentHistory from "../Dashboard/Seller/PaymentHistory";
import ManageMedicine from "../Dashboard/Seller/ManageMedicine";
import ManageAdvertisement from "../Dashboard/Seller/ManageAdvertisement";
import UserPaymentHistory from "../Dashboard/User/UserPaymentHistory";
import BlogAndArticles from "../Pages/BlogAndArticle";
import AboutUs from "../Pages/AboutUs";

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
        element: <BlogAndArticles></BlogAndArticles>,
        path: "/blog",
      },
      {
        element: <AboutUs></AboutUs>,
        path: "/about-us",
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      //===========admin route===========//
      {
        index: true,
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
        path: "admin",
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
          <AdminRoute>
            <ManageCategory></ManageCategory>
          </AdminRoute>
        ),
        path: "manage-category",
      },
      {
        element: (
          <AdminRoute>
            <PaymentManagement></PaymentManagement>
          </AdminRoute>
        ),
        path: "payment-management",
      },
      {
        element: (
          <AdminRoute>
            <SalesReport />
          </AdminRoute>
        ),
        path: "sales-report",
      },
      {
        element: (
          <AdminRoute>
            <ManageBannerAdvertise />
          </AdminRoute>
        ),
        path: "manage-banner-advertise",
      },
      //===========seller route===========//
      {
        element: (
          <SellerRoute>
            <SellerDashboard></SellerDashboard>
          </SellerRoute>
        ),
        path: "seller",
      },
      {
        element: (
          <SellerRoute>
            <PaymentHistory></PaymentHistory>
          </SellerRoute>
        ),
        path: "seller-payment-history",
      },
      {
        element: (
          <SellerRoute>
            <ManageMedicine></ManageMedicine>
          </SellerRoute>
        ),
        path: "manage-medicines",
      },
      {
        element: (
          <SellerRoute>
            <ManageAdvertisement />
          </SellerRoute>
        ),
        path: "manage-advertisement",
      },
      // user route
      // {
      //   element: <UserDashboard></UserDashboard>,
      //   path: "user",
      // },
      {
        element: <UserPaymentHistory/>,
        path: "user",
      },
      {
        element: <UserProfile></UserProfile>,
        path: "profile",
      },
    ],
  },
]);

export default router;
