import { useTranslation } from "react-i18next";
import { assets } from "../../../../../imagesImports/assets";

const EntryPriceText = ({ entryPrice }: { entryPrice: number }) => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-start items-center">
            <div className="popupTextGradient">
                {t("entryPriceAlreadyInMatch")}
            </div>
            <div className="flex justify-start items-center ml-[13px]">
                <img src={assets.icons.dollar} alt="coin currency image" />
                <div className="bitcoinTextGradient leading-[24px] ml-[4px]">
                    {entryPrice}
                </div>
            </div>
        </div>
    );
};

export default EntryPriceText;
