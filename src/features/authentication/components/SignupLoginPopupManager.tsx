import { useContext, useState } from "react";
import { ApplicationContext } from "../../../context/ApplicationContext";
import ClosePopupButton from "./buttons/ClosePopupButton";
import PopupLogo from "./other/PopupLogo";
import PopupBackground from "../../../components/common/PopupBackground";
import PopupText from "./other/PopupText";
import FormStateSwitchButton from "./buttons/FormStateSwitchButton";
import "../styles/authenticationStyles.css";
import LoginSignupForm from "./forms/LoginSignupForm";
import { FormState } from "../types/enums";

const SignupLoginPopupManager = () => {
    const { displayLoginSignupPopup, setDisplayLoginSignupPopup } =
        useContext(ApplicationContext)!;
    const [currentFormState, setCurrentFormState] = useState<FormState>(
        FormState.Login,
    );

    // useEffect(() => {
    //     if (isUserLoggedIn()) {
    //         setDisplayLoginSignupPopup(false);
    //     }
    // }, []);

    return (
        <div
            className={`popupBackground w-full h-full fixed top-0 left-0 overflow-hidden
                        flex justify-center items-center 
                        ${!displayLoginSignupPopup ? "opacity-0 z-[-20]" : "opacity-100 z-[20]"}
                        transition-all duration-[0.5] ease-in-out`}
        >
            <PopupBackground width="387px" height="431px">
                <div className="left-[50%] -translate-x-1/2 top-[-50px] absolute">
                    <PopupLogo widthPx={82} heightPx={82} />
                </div>
                <ClosePopupButton
                    handleOnClick={() => setDisplayLoginSignupPopup(false)}
                />
                <PopupText currentFormState={currentFormState} />
                <LoginSignupForm currentFormState={currentFormState} />
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[31px]">
                    <FormStateSwitchButton
                        currentFormState={currentFormState}
                        setCurrentFormState={setCurrentFormState}
                    />
                </div>
            </PopupBackground>
        </div>
    );
};

export default SignupLoginPopupManager;
