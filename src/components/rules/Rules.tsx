import { useContext, useEffect } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import HomeBgGradient from "../home/homeComponents/HomeBgGradient";
import { useTranslation } from "react-i18next";
import RulesOfTheGame from "./rulesComponents/RulesOfTheGame";
import RulesHeading from "./rulesComponents/RulesHeading";
import PurposeHeading from "./rulesComponents/PurposeHeading";
import PurposesParagraphs from "./rulesComponents/PurposesParagraphs";
import FollowUsFooter from "./rulesComponents/FollowUsFooter";
import UpDownText from "./rulesComponents/UpDownText";

const Rules = () => {
    const { setCurrentGame } = useContext(ApplicationContext)!;
    const { t } = useTranslation();

    useEffect(() => {
        setCurrentGame(GameCoice.None);
    }, []);

    return (
        <div>
            <HomeBgGradient />
            <UpDownText />
            <div
                className="text-[#ccc3c3] xl:ml-[157px] ml-0
                            xl:mt-[163px] sm:mt-[60px] mt-[49px]"
            >
                <RulesHeading />
                <RulesOfTheGame />
                <PurposeHeading />
                <PurposesParagraphs />
                <div className="flex xl:justify-start justify-center">
                    <button
                        className="buttonGrayGradient border-[1px] border-[#ccc3c3] 
                               rounded-[10px] md:text-[25px] text-[16px] font-semibold mt-[47px]
                               md:w-[193px] w-[131px] md:h-[46px] h-[27px]"
                    >
                        {t("inviteAFriend")}
                    </button>
                </div>
            </div>
            <FollowUsFooter />
        </div>
    );
};

export default Rules;
