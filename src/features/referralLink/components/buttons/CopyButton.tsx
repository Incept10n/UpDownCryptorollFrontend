import { useTranslation } from "react-i18next";
import { assets } from "../../../../imagesImports/assets";

const CopyButton = ({ handleOnClick }: { handleOnClick: () => void }) => {
    const { t } = useTranslation();

    return (
        <button
            className="w-auto h-[37px] rounded-[10px] bg-[#4c506c] bg-opacity-[0.33]
                       mr-[16px] flex justify-between items-center pl-[12px] pr-[5px] space-x-[8px]"
            onClick={handleOnClick}
        >
            <div className="text-[#a4a4a4] text-[1.25rem] font-semibold">
                {t("copyLink")}
            </div>
            <img
                src={assets.icons.copy}
                alt="copy icon"
                className="w-[28px] h-[28px]"
            />
        </button>
    );
};

export default CopyButton;
