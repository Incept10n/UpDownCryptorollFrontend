import { useTranslation } from "react-i18next";
import { assets } from "../../../../imagesImports/assets";
import { useState } from "react";

const CopyButton = ({ handleOnClick }: { handleOnClick: () => void }) => {
    const { t } = useTranslation();
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setIsButtonClicked(true);
        handleOnClick();
    };

    return (
        <button
            className="w-auto md:h-[37px] h-[26px] bg-[#4c506c] bg-opacity-[0.33]
                       md:rounded-[10px] rounded-[6px] 
                       md:mr-[16px] mr-[8px] flex justify-between items-center 
                       md:pl-[12px] md:pr-[5px] px-[4px] md:space-x-[8px]
                       active:scale-[1.05] transition-all duration-[0.1s] ease-in-out"
            onClick={handleButtonClick}
        >
            <div className="text-[#a4a4a4] text-[1.25rem] font-semibold md:block hidden">
                {isButtonClicked ? t("copied") : t("copyLink")}
            </div>
            {isButtonClicked ? (
                <img
                    src={assets.icons.taskCompletedCheckmark}
                    alt="check mark"
                    className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
                />
            ) : (
                <img
                    src={assets.icons.copy}
                    alt="copy icon"
                    className="md:w-[28px] md:h-[28px] w-[20px] h-[20px]"
                />
            )}
        </button>
    );
};

export default CopyButton;
