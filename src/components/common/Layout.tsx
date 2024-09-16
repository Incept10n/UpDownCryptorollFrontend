import { Outlet } from "react-router-dom";
import Header from "./Header";
import ConnectTonWalletPopup from "../popups/ConnectTonWalletPopup";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <ConnectTonWalletPopup />
        </div>
    );
};

export default Layout;
