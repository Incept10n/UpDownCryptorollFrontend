import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { assets } from "../../../imagesImports/assets";
import { useContext, useEffect, useState } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../context/ApplicationContext";
import MobileButtonsMenu from "./MobileButtonsMenu";

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
                <div className="md:text-[1em] text-[14px] ">3754.53</div>
                <img
                    src={assets.images.coin}
                    alt="coin currency"
                    className="md:w-[26px] md:h-[26px] w-[19px] h-[19px]"
                />
            </div>
            <Link
                to="/profile"
                className={`${!isDisplayingButtons && "lg:hidden"} lg:block hidden`}
            >
                <img
                    src={assets.icons.profilePicture}
                    alt="profile picture pic"
                />
            </Link>
            <MobileButtonsMenu />
        </div>
    );
};

export default MainHeaderButtons;
