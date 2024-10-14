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
            <div
                className="UpDownDarkBlueBg rounded-[27px] 
                            sm:w-[450px] w-[90%] sm:h-[270px] h-[198px] space-y-[33px]"
            >
                <h1
                    className="popupTextGradient sm:text-[2rem] text-[20px]
                               font-semibold text-center mt-[22px]"
                >
                    {t("youveJustClaimed")}
                </h1>
                <div className="w-full flex justify-center">
                    <div className="flex justify-start items-center">
                        <div className="sm:text-[2rem] text-[1rem] font-semibold text-[#57b14f]">
                            + {Formatter.formatMoney(reward)}
                        </div>
                        <img
                            src={assets.images.inputFormCoin}
                            alt="input form coin"
                            className="sm:w-[35px] sm:h-[35px] w-[18px] h-[18px] ml-[7px]"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="sm:hidden block">
                        <PopupButton
                            text={t("okSmiley")}
                            width="105px"
                            height="24px"
                            fontSize="1rem"
                            onClick={claimButtonAction}
                        />
                    </div>
                    <div className="sm:block hidden">
                        <PopupButton
                            text={t("okSmiley")}
                            width="210px"
                            height="48px"
                            fontSize="1.5rem"
                            onClick={claimButtonAction}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RewardToCollectPopup;
