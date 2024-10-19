import { useContext } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../context/ApplicationContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PlayNowButton = () => {
    const { setCurrentGame } = useContext(ApplicationContext)!;
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <button
            onClick={() => {
                setCurrentGame(GameCoice.Btc);
                navigate("/play");
            }}
            className="buttonGrayGradient md:w-[346px] md:h-[83px] w-[228px] h-[53px]
                       md:text-[50px] text-[30px] font-bold text-[#a4a4a4] 
                       border-[1px] border-[#747474] rounded-[24px]
                       hover:scale-[1.1] scale-[1]
                       transition-all duration-[0.3s] ease-in-out 
                       relative"
        >
            {t("playNow")}
        </button>
    );
};

export default PlayNowButton;
