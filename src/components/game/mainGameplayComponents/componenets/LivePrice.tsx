import { useTranslation } from "react-i18next";
import GradientText from "./common/GradientText";
import GradientQuestionMark from "./common/GradientQuestionMark";

const LivePrice = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center p-[52px] relative">
            <div className="flex justify-between items-center w-[141px]">
                <GradientText
                    className="text-[25px] font-semibold"
                    text={t("livePrice")}
                />
                <GradientQuestionMark />
            </div>
        </div>
    );
};

export default LivePrice;
