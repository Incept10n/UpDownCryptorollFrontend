import { useTranslation } from "react-i18next";
import ClosePopupButton from "../../../components/common/ClosePopupButton";
import PopupBackground from "../../../components/common/PopupBackground";
import PopupLogo from "../../../components/common/PopupLogo";
import AdditionalInfoText from "./text/AdditionalInfoText";
import CopyField from "./copyFields/CopyField";
import LinkToReward from "./text/LinkToReward";

const ReferalLinkPopup = ({
    displayReferralLinkPopup,
    handleOnCloseButtonClick,
}: {
    displayReferralLinkPopup: boolean;
    handleOnCloseButtonClick: () => void;
}) => {
    const { t } = useTranslation();

    return (
        <div
            className={`popupBackground w-full h-full fixed top-0 left-0 overflow-hidden
                        flex justify-center items-center 
                        ${!displayReferralLinkPopup ? "opacity-0 z-[-20]" : "opacity-100 z-[20]"}
                        transition-all duration-[0.5] ease-in-out`}
        >
            <PopupBackground className="md:w-[648px] md:h-[199px] w-[336px] h-[131px] rounded-[18px]">
                <ClosePopupButton
                    handleOnClick={handleOnCloseButtonClick}
                    imgClassName="md:w-[52px] md:h-[54px] sm:w-[40px] sm:h-[42px] "
                />
                <div className="absolute left-1/2 -translate-x-1/2 top-[-32px]">
                    <PopupLogo
                        className="md:w-[54px] md:h-[54px] w-[48px] h-[48px]"
                        imgClassName="md:w-[44px] md:h-[25px] 
                                      sm:w-[35px] sm:h-[20px] 
                                      w-[35px] h-[20px]"
                    />
                </div>
                <div className="ml-[34px] md:mt-[30px] mt-[23px] inline-block">
                    <AdditionalInfoText text={t("yourReferralLink")} />
                </div>
                <div
                    className="md:ml-[23px] md:mr-[0px] md:mt-[15px]
                                ml-[8px] mr-[8px] mt-[10px]"
                >
                    <CopyField />
                </div>
                <div className="ml-[34px] md:mt-[15px] mt-[6px]">
                    <LinkToReward />
                </div>
            </PopupBackground>
        </div>
    );
};

export default ReferalLinkPopup;
