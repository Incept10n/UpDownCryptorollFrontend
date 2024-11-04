import { useContext, useEffect } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import { assets } from "../../imagesImports/assets";
import { useTranslation } from "react-i18next";
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react";

const SignupLoginPopup = () => {
    const { displayLoginSignupPopup, setDisplayLoginSignupPopup } =
        useContext(ApplicationContext)!;

    const { t } = useTranslation();
    const wallet = useTonWallet();

    useEffect(() => {
        if (wallet !== null) {
            setDisplayLoginSignupPopup(false);
        }
    }, [wallet]);

    return (
        <div
            className={`popupBackground w-full h-full fixed top-0 left-0 overflow-hidden
                        flex justify-center items-center 
                        ${!displayLoginSignupPopup ? "opacity-0 z-[-20]" : "opacity-100 z-[20]"}
                        transition-all duration-[0.5] ease-in-out`}
        >
            <div
                className="relative w-[380px] h-[374px] bg-contain bg-no-repeat"
                style={{
                    backgroundImage: `url(${assets.images.tonConnectPopupBg})`,
                }}
            >
                <div
                    className="w-[82px] h-[82px] bg-[#828383] rounded-full
                                absolute left-[50%] translate-x-[-53%] translate-y-[-33%]"
                >
                    <img
                        src={assets.icons.logo}
                        alt="logo"
                        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                    />
                </div>
                <button
                    className="absolute right-[30px] top-[30px] hover:scale-[1.1] scale-[1]
                               transition-all duration-[0.3] ease-in-out"
                    onClick={() => setDisplayLoginSignupPopup(false)}
                >
                    <img
                        src={assets.icons.popupCloseBtn}
                        alt="popup close button"
                    />
                </button>
                <div
                    className="text-center text-[25px] font-semibold absolute 
                               popupTextGradient w-[291px] 
                               left-[50%] top-[50%] translate-x-[-50%] translate-y-[-80%]"
                >
                    {t("plsConnectYourWallet")}
                </div>
                <div className="absolute left-[50%] translate-x-[-50%] bottom-[77px]">
                    <TonConnectButton />
                </div>
            </div>
        </div>
    );
};

export default SignupLoginPopup;
