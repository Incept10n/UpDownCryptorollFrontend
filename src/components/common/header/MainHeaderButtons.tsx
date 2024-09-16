import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../../../imagesImports/assets";
import { useContext, useEffect, useState } from "react";
import MobileButtonsMenu from "./MobileButtonsMenu";
import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import { fetchPlayerInfo } from "../../../helperFunctions/fetchFunctions";
import { ApplicationContext } from "../../../context/ApplicationContext";

const MainHeaderButtons = () => {
    const { t } = useTranslation();
    const wallet = useTonWallet();
    const rawAddress = useTonAddress(false);

    const location = useLocation();
    const navigate = useNavigate();

    const [isDisplayingButtons, setIsDisplayingButtons] = useState(
        location.pathname !== "/",
    );
    const [currentBalance, setCurrentBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const { setDisplayTonConnectPopup } = useContext(ApplicationContext)!;

    useEffect(() => {
        if (!wallet) {
            setCurrentBalance(0);
        } else if (wallet) {
            fetchPlayerInfo(rawAddress).then((result) => {
                setCurrentBalance(result?.currentBalance);
            });
        }

        setIsLoading(false);
    }, [wallet]);

    useEffect(() => {
        setIsDisplayingButtons(location.pathname !== "/");
    }, [location.pathname]);

    const handleGoToProfile = () => {
        if (!wallet) {
            setDisplayTonConnectPopup(true);
        } else if (wallet) {
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
                {t("Rules")}
            </Link>
            <div
                className={`border border-[#ccc3c3] rounded-[10px] py-[8px] px-[9px]
                            flex justify-between items-center 
                            md:w-[115px] md:h-auto w-[100px] h-[27px]
                            ${!isDisplayingButtons && "hidden"}`}
            >
                <div className="md:text-[1em] text-[14px]">
                    {isLoading ? (
                        <img
                            src={assets.icons.loading}
                            alt="loading icon"
                            className="w-full h-full rotateInfinitely"
                        />
                    ) : (
                        currentBalance
                    )}
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
