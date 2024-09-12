import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { assets } from "../../../imagesImports/assets";
import { useContext, useEffect, useState } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../context/ApplicationContext";

const MainHeaderButtons = () => {
    const { t } = useTranslation();
    const { currentGame } = useContext(ApplicationContext)!;

    const [isDisplayingButtons, setIsDisplayingButtons] = useState(
        currentGame !== GameCoice.None,
    );

    useEffect(() => {
        setIsDisplayingButtons(currentGame !== GameCoice.None);
    }, [currentGame]);

    return (
        <div
            className="upDownTextWhite font-semibold 
                       flex justify-between items-center 
                       space-x-[34px] mr-[60px]"
        >
            <button
                className={`border border-[#ccc3c3] rounded-[10px] py-[9px] px-[14px]
                            ${!isDisplayingButtons && "hidden"}`}
            >
                {t("dailyChallenge")}
            </button>
            <a
                href="https://cryptoroll.su"
                target="_blank"
                className="hover:underline"
            >
                {t("aboutTheProject")}
            </a>
            <Link to="/rules" className="hover:underline">
                {t("Rules")}
            </Link>
            <div
                className={`border border-[#ccc3c3] rounded-[10px] py-[8px] px-[9px]
                            flex justify-between items-center w-[115px]
                            ${!isDisplayingButtons && "hidden"}`}
            >
                3754.53
                <img src={assets.images.coin} alt="coin currency" />
            </div>
            <Link
                to="/profile"
                className={`${!isDisplayingButtons && "hidden"}`}
            >
                <img
                    src={assets.icons.profilePicture}
                    alt="profile picture pic"
                />
            </Link>
        </div>
    );
};

export default MainHeaderButtons;
