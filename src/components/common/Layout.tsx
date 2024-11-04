import { Outlet } from "react-router-dom";
import Header from "./Header";
import { SignupLoginPopupManager } from "../../features/authentication";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <SignupLoginPopupManager />
        </div>
    );
};

export default Layout;
