import { Outlet } from "react-router-dom";
import Header from "./Header";
import { SignupLoginPopupManager } from "../../features/authentication";
import { DailyRewardPopup } from "../../features/dailyReward";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <SignupLoginPopupManager />
            <DailyRewardPopup />
        </div>
    );
};

export default Layout;
