import { useTranslation } from "react-i18next";
import ClosePopupButton from "../../../components/common/ClosePopupButton";
import PopupBackground from "../../../components/common/PopupBackground";
import PopupLogo from "../../../components/common/PopupLogo";
import AdditionalInfoText from "./text/AdditionalInfoText";
import CopyField from "./copyFields/CopyField";

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
            <PopupBackground className="w-[648px] h-[200px] rounded-[18px]">
                <ClosePopupButton handleOnClick={handleOnCloseButtonClick} />
                <div className="absolute left-1/2 -translate-x-1/2 top-[-32px]">
                    <PopupLogo
                        className="sm:w-[54px] sm:h-[54px] w-[48px] h-[48px]"
                        imgClassName="sm:w-[43px] sm:h-[25px] w-[39px] h-[22px]"
                    />
                </div>
                <div className="ml-[34px] mt-[30px] inline-block">
                    <AdditionalInfoText text={t("yourReferralLink")} />
                </div>
                <div className="ml-[23px] mt-[26px]">
                    <CopyField />
                </div>
            </PopupBackground>
        </div>
    );
};

export default ReferalLinkPopup;
