import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomeLayout></HomeLayout>
            },
            {
                path:'/login',
                element:<Login></Login>            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }
        ]
    }
])

export default router