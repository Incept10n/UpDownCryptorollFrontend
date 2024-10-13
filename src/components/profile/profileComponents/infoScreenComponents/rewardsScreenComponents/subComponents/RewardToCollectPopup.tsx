import { useTranslation } from "react-i18next";
import { assets } from "../../../../../../imagesImports/assets";
import PopupButton from "../../../../../game/mainGameplayComponents/componenets/common/PopupButton";
import { Formatter } from "../../../../../../helperFunctions/Formater";

const RewardToCollectPopup = ({
    reward,
    claimButtonAction,
}: {
    reward: number;
    claimButtonAction: () => void;
}) => {
    const { t } = useTranslation();

    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-[#3c3939] bg-opacity-[70%] z-[20]
                            flex justify-center items-center"
        >
            <div className="UpDownDarkBlueBg rounded-[27px] w-[90%] h-[198px] space-y-[33px]">
                <h1 className="popupTextGradient text-[20px] font-semibold text-center mt-[22px]">
                    {t("youveJustClaimed")}
                </h1>
                <div className="w-full flex justify-center">
                    <div className="flex justify-start items-center">
                        <div className="text-[1rem] font-semibold text-[#57b14f]">
                            + {Formatter.formatMoney(reward)}
                        </div>
                        <img
                            src={assets.images.inputFormCoin}
                            alt="input form coin"
                            className="w-[18px] h-[18px] ml-[7px]"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <PopupButton
                        text={t("okSmiley")}
                        width="105px"
                        height="24px"
                        fontSize="1rem"
                        onClick={claimButtonAction}
                    />
                </div>
            </div>
        </div>
    );
};

export default RewardToCollectPopup;
