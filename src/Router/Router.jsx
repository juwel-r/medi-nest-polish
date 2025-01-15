import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/UserProfile";
import ErrorPage from "../Pages/ErrorPage";
import Shop from "../Pages/Shop";

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
