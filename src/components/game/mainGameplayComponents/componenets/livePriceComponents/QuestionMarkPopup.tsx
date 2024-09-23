import { useTranslation } from "react-i18next";

const QuestionMarkPopup = () => {
    const { t } = useTranslation();

    return (
        <div
            className="questionMarkPopupGradientBg rounded-[29px] 
                        relative w-[168px] h-[66px] p-[10px]"
        >
            <p className="text-[$434040] text-[13px] text-center font-semibold leading-[1rem]">
                {t("questionMarkPopupText")}
            </p>
            <div
                className="triangle w-[22px] h-[22px] rotate-180 
                            absolute bottom-[1px] right-0 translate-y-[100%] translate-x-[-130%]"
            ></div>
        </div>
    );
};

export default QuestionMarkPopup;
