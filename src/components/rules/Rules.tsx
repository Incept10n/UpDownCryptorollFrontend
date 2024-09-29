import { useContext, useEffect } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import HomeBgGradient from "../home/homeComponents/HomeBgGradient";
import { useTranslation } from "react-i18next";
import RulesOfTheGame from "./rulesComponents/RulesOfTheGame";
import RulesHeading from "./rulesComponents/RulesHeading";

const Rules = () => {
    const { setCurrentGame } = useContext(ApplicationContext)!;
    const { t } = useTranslation();

    useEffect(() => {
        setCurrentGame(GameCoice.None);
    }, []);

    return (
        <div>
            <HomeBgGradient />
            <div className="text-[#ccc3c3] ml-[157px] mt-[163px]">
                <RulesHeading />
                <RulesOfTheGame />
                <h1 className="text-[42px] font-semibold mt-[114px]">
                    {t("rulesHeader")}
                </h1>
            </div>
        </div>
    );
};

export default Rules;
