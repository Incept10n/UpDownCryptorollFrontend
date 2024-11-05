import { useTranslation } from "react-i18next";
import WhiteBorderButton from "../buttons/WhiteBorderButton";
import {
    TonConnectButton,
    useTonAddress,
    useTonWallet,
} from "@tonconnect/ui-react";
import {
    getCurrentUsername,
    removeJwtToken,
} from "../../../../helperFunctions/jwtTokenFuncions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { changeUserInfo } from "../../../../helperFunctions/fetchFunctions";

const SignoutConnectWalletButtons = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const wallet = useTonWallet();
    const walletAddress = useTonAddress(false);

    const handleOnLogOut = () => {
        removeJwtToken();
        navigate("/");
    };

    useEffect(() => {
        if (wallet && walletAddress) {
            changeUserInfo(getCurrentUsername()!, {
                newWalletAddress: walletAddress,
            });
        }
    }, [wallet, walletAddress, getCurrentUsername()]);

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
