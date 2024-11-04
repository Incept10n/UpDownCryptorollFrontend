import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../../imagesImports/assets";
import { useContext, useEffect, useState } from "react";
import MobileButtonsMenu from "./MobileButtonsMenu";
import { fetchPlayerInfo } from "../../../helperFunctions/fetchFunctions";
import { ApplicationContext } from "../../../context/ApplicationContext";
import {
    getCurrentUsername,
    isUserLoggedIn,
} from "../../../helperFunctions/jwtTokenFuncions";

const MainHeaderButtons = () => {
    const { t } = useTranslation();

    const location = useLocation();
    const navigate = useNavigate();

    const [isDisplayingButtons, setIsDisplayingButtons] = useState(
        location.pathname !== "/",
    );

    const { currentBalance, setCurrentBalance, setDisplayLoginSignupPopup } =
        useContext(ApplicationContext)!;

    useEffect(() => {
        if (!isUserLoggedIn() || !getCurrentUsername()) {
            setCurrentBalance(0);
        } else {
            fetchPlayerInfo(getCurrentUsername()!).then((result) => {
                if (result) {
                    setCurrentBalance(result.currentBalance);
                }
            });
        }
    }, []);

    useEffect(() => {
        setIsDisplayingButtons(location.pathname !== "/");
    }, [location.pathname]);

    const handleGoToProfile = () => {
        if (!isUserLoggedIn()) {
            setDisplayLoginSignupPopup(true);
        } else {
            navigate("/profile");
        }
    };

    return (
        <div
            className="upDownTextWhite font-semibold 
                       flex justify-between items-center 
                       sm:space-x-[34px] space-x-[15px] sm:mr-[60px] mr-[27px]"
        >
            <button
                className={`border border-[#ccc3c3] rounded-[10px] py-[9px] px-[14px]
                            ${!isDisplayingButtons && "lg:hidden"}
                            lg:block hidden`}
            >
                {t("dailyChallenge")}
            </button>
            <a
                href="https://cryptoroll.su"
                target="_blank"
                className="hover:underline lg:block hidden"
            >
                {t("aboutTheProject")}
            </a>
            <Link to="/rules" className="hover:underline lg:block hidden">
                {t("rules")}
            </Link>
            <div
                className={`border border-[#ccc3c3] rounded-[10px] py-[8px] px-[9px]
                            flex justify-between items-center 
                            md:w-[115px] md:h-auto w-[100px] h-[27px]
                            ${!isDisplayingButtons && "hidden"}`}
            >
                <div className="md:text-[1em] text-[14px]">
                    {currentBalance}
                </div>
                <img
                    src={assets.images.coin}
                    alt="coin currency"
                    className="md:w-[26px] md:h-[26px] w-[19px] h-[19px]"
                />
            </div>
            <button
                className={`${!isDisplayingButtons && "lg:hidden"} lg:block hidden`}
                onClick={handleGoToProfile}
            >
                <img
                    src={assets.icons.profilePicture}
                    alt="profile picture pic"
                />
            </button>
            <MobileButtonsMenu />
        </div>
    );
};

export default MainHeaderButtons;
