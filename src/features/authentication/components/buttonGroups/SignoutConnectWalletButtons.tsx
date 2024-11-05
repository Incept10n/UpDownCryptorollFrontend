import { useTranslation } from "react-i18next";
import WhiteBorderButton from "../buttons/WhiteBorderButton";
import { TonConnectButton } from "@tonconnect/ui-react";
import { removeJwtToken } from "../../../../helperFunctions/jwtTokenFuncions";
import { useNavigate } from "react-router-dom";

const SignoutConnectWalletButtons = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleOnLogOut = () => {
        removeJwtToken();
        navigate("/");
    };

    return (
        <div>
            <div className="mt-[68px] flex justify-between items-center">
                <WhiteBorderButton
                    width="auto"
                    height="34px"
                    text={t("signOutText")}
                    fontSize="1.25rem"
                    paddingX="19px"
                    rounded="50px"
                    handleOnClick={handleOnLogOut}
                />
                <TonConnectButton className="scale-[0.9]" />
            </div>
            <div
                className="UpDownGrayText underline text-right max-w-[176px] 
                            float-right text-[0.8rem] mr-[10px] mt-[7px]"
            >
                {t("connWalletToReceiveRewards")}
            </div>
        </div>
    );
};

export default SignoutConnectWalletButtons;
