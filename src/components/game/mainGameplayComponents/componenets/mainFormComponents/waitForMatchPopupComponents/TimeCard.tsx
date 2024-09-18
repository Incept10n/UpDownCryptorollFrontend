import { useTranslation } from "react-i18next";

const TimeCard = ({ time, timeName }: { time: number; timeName: string }) => {
    const { t } = useTranslation();

    return (
        <div
            className="w-[52px] h-[54px] buttonGrayGradient rounded-[8px] 
                           flex flex-col justify-start items-center
                           border-[2px] border-[#747474]"
        >
            <div className="text-[25px] bitcoinTextGradient leading-[20px] mt-[6px]">
                {time}
            </div>
            <div className="text-[12px] capitalize mt-[4px]">{t(timeName)}</div>
        </div>
    );
};

export default TimeCard;
