import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Tooltip } from "react-tooltip";


const MainLayout = () => {
    return (
        <div className="relative pb-16">
            <div className="fixed z-50 w-full px-2 backdrop-blur-sm">
            <Navbar></Navbar>
            <Tooltip id="my-tooltip" />
            </div>
            <div className="pt-16">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;