import { useTranslation } from "react-i18next";

const InviteFriendButton = () => {
    const { t } = useTranslation();

    return (
        <button
            className="upDownTextWhite lg:text-[1.6rem] text-[1rem] 
                       font-semibold border-[1px] leading-none
                       border-[#ccc3c3] text-center rounded-[10px]
                       px-[10px] lg:h-[46px] h-[27px]
                       inline-block
                       lg:bottom-[88px] lg:top-auto bottom-auto top-[397px]
                       hover:scale-[1.1] scale-[1] 
                       transition-all duration-[0.2] ease-in-out"
        >
            {t("inviteAFriend")}
        </button>
    );
};

export default InviteFriendButton;
