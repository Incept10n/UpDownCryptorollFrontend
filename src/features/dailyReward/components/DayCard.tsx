import { useTranslation } from "react-i18next";

const DayCard = ({ dayNumber }: { dayNumber: number }) => {
    const { t } = useTranslation();

    return (
        <div
            className="buttonGrayGradient rounded-[10px] border-[1.3px] 
                       border-[#747474] w-auto h-[34px] px-[23px]
                       inline-flex justify-center items-center 
                       upDownTextWhite font-semibold"
        >
            {t("day")} {dayNumber}
        </div>
    );
};

export default DayCard;
