import { assets } from "../../../../imagesImports/assets";
import { useTranslation } from "react-i18next";

const FutureGamesCard = () => {
    const { t } = useTranslation();

    return (
        <div className="w-[303px] h-[357px] homeGradientBorder pt-[1px] px-[1px]">
            <div className="w-full h-full UpDownDarkBlueBg rounded-[51px]">
                <div className="text-[35px] text-[#a4a4a4] font-semibold text-center pt-[10px]">
                    cryptoroll
                </div>
                <img
                    src={assets.images.futureGameCardContent}
                    alt="stock"
                    className="mt-[40px]"
                />
                <div className="text-[15px] text-[#a4a4a4] font-semibold text-center mt-[45px]">
                    {t("moreCommingSoon")}
                </div>
            </div>
        </div>
    );
};

export default FutureGamesCard;
