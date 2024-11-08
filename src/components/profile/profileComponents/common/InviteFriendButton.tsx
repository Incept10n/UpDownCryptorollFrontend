import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReferalLinkPopup } from "../../../../features/referralLink";

const InviteFriendButton = () => {
    const { t } = useTranslation();
    const [displayReferralLinkPopup, setDisplayReferralLinkPopup] =
        useState(false);

    return (
        <>
            <button
                className="upDownTextWhite lg:text-[1.6rem] text-[1rem] 
                       font-semibold border-[1px] leading-none
                       border-[#ccc3c3] text-center rounded-[10px]
                       px-[10px] lg:h-[46px] h-[27px]
                       inline-block
                       lg:bottom-[88px] lg:top-auto bottom-auto top-[397px]
                       hover:scale-[1.1] scale-[1] 
                       transition-all duration-[0.2] ease-in-out"
                onClick={() => setDisplayReferralLinkPopup(true)}
            >
                {t("inviteAFriend")}
            </button>
            <ReferalLinkPopup
                displayReferralLinkPopup={displayReferralLinkPopup}
                handleOnCloseButtonClick={() =>
                    setDisplayReferralLinkPopup(false)
                }
            />
        </>
    );
};

export default InviteFriendButton;
